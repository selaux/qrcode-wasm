#![feature(proc_macro_hygiene, decl_macro)]

macro_rules! log {
    ( $( $t:tt )* ) => {
        web_sys::console::log_1(&format!( $( $t )* ).into());
    }
}

use futures::{future, Future};
use qrende;
use ruukh::prelude::*;
use std::panic;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use web_sys;

fn detect_markers(id: &str) -> Vec<qrende::PositionMarker> {
  let document = web_sys::window().and_then(|window| window.document());
  if let Some(document) = document {
    let video_element = document.get_element_by_id(&format!("video-{}", id));
    let canvas_element = document.get_element_by_id(&format!("canvas-{}", id));

    if let (Some(video_element), Some(canvas_element)) = (video_element, canvas_element) {
      log!("Found necessary elements, starting detection...");
      web_sys::console::time();
      let video_element: web_sys::HtmlVideoElement = video_element.dyn_into().unwrap();
      let canvas_element: web_sys::HtmlCanvasElement = canvas_element.dyn_into().unwrap();

      canvas_element.set_width(video_element.offset_width() as u32);
      canvas_element.set_height(video_element.offset_height() as u32);

      let context: web_sys::CanvasRenderingContext2d = canvas_element
        .get_context("2d")
        .unwrap()
        .unwrap()
        .dyn_into()
        .unwrap();

      context
        .draw_image_with_html_video_element(&video_element, 0., 0.)
        .unwrap();

      let url = canvas_element.to_data_url().unwrap();
      let data = base64::decode(url.split(',').nth(1).unwrap()).unwrap();
      let image = image::load_from_memory(&data).unwrap();
      let markers = qrende::detect_position_markers(&image);

      web_sys::console::time_end();

      let color = JsValue::from("#FF0000");
      context.set_stroke_style(&color);
      for marker in &markers {
        let x = marker.center.0 - marker.size / 2.;
        let y = marker.center.1 - marker.size / 2.;
        context.stroke_rect(x, y, marker.size, marker.size);
      }

      log!("{:?}", markers);

      return markers;
    }
  }

  vec![]
}

#[derive(Clone)]
struct WebcamQrCodeDetector {
  media_stream: web_sys::MediaStream,
}

impl WebcamQrCodeDetector {
  pub fn new(media_stream: web_sys::MediaStream) -> Self {
    WebcamQrCodeDetector { media_stream }
  }

  pub fn id(&self) -> String {
    self.media_stream.id()
  }
}

impl PartialEq for WebcamQrCodeDetector {
  fn eq(&self, other: &WebcamQrCodeDetector) -> bool {
    self.id() == other.id()
  }
}

#[component]
struct DecoderVideo {
  qr_decoder: WebcamQrCodeDetector,
  #[state(default=None)]
  detections: Option<Vec<qrende::PositionMarker>>,
}

impl Lifecycle for DecoderVideo {
  fn mounted(&self) {
    let window = web_sys::window();
    let document = web_sys::window().and_then(|window| window.document());
    if let (Some(window), Some(document)) = (window, document) {
      if let Some(element) = document.get_element_by_id(&format!("video-{}", self.qr_decoder.id()))
      {
        log!("Video Element found, starting webcam stream");
        let video_element: web_sys::HtmlMediaElement = element.dyn_into().unwrap();
        video_element.set_src_object(Some(&self.qr_decoder.media_stream));
        video_element.play().unwrap();

        let setter = self.state_setter();
        let id = self.qr_decoder.id();
        let closure = Closure::wrap(Box::new(move || {
          setter.set_state(|state| {
            state.detections = Some(detect_markers(&id));
          });
        }) as Box<Fn()>);

        window
          .set_interval_with_callback_and_timeout_and_arguments_0(
            closure.as_ref().unchecked_ref(),
            1000,
          )
          .unwrap();

        // Forget the closure so that it lives for the lifetime of the program.
        closure.forget();
      }
    }
  }
}

impl Render for DecoderVideo {
  fn render(&self) -> Markup<Self> {
    html! {
      <video id={format!("video-{}", &self.qr_decoder.id())} >
      </video>
      <canvas id={format!("canvas-{}", &self.qr_decoder.id())}></canvas>
    }
  }
}

#[component]
struct MyApp {
  #[state(default=None)]
  error: Option<String>,
  #[state(default=None)]
  qr_decoder: Option<WebcamQrCodeDetector>,
}

impl Lifecycle for MyApp {
  fn mounted(&self) {
    let state_setter = self.state_setter();
    let window = match web_sys::window() {
      Some(w) => future::ok(w),
      None => future::err(JsValue::from("Could not find window")),
    };
    let media_stream_future = window
      .and_then(|window| {
        future::result(
          window
            .navigator()
            .media_devices()
            .and_then(|media_devices| {
              let mut media_stream_constraints = web_sys::MediaStreamConstraints::new();
              media_stream_constraints.video(&wasm_bindgen::JsValue::TRUE);

              media_devices.get_user_media_with_constraints(&media_stream_constraints)
            }),
        )
      })
      .and_then(wasm_bindgen_futures::JsFuture::from)
      .and_then(|media_stream_js| {
        let media_stream: Result<web_sys::MediaStream, _> = media_stream_js.dyn_into();
        future::result(media_stream)
      })
      .then(move |result| {
        let void: Result<JsValue, JsValue> = Result::Ok(JsValue::UNDEFINED);
        match result {
          Ok(media_stream) => state_setter.set_state(|state| {
            state.qr_decoder = Some(WebcamQrCodeDetector::new(media_stream.clone()));
          }),
          Err(js_value) => state_setter.set_state(|state| {
            state.error = Some(format!("Error getting media_stream: {:?}", js_value));
          }),
        }
        void
      });

    wasm_bindgen_futures::future_to_promise(media_stream_future);
  }
}

impl Render for MyApp {
  fn render(&self) -> Markup<Self> {
    match (&self.error, &self.qr_decoder) {
      (Some(error), _) => html! { <div>{error}</div> },
      (None, None) => html! { <div>{"Loading..."}</div> },
      (_, Some(qr_decoder)) => {
        html! { <DecoderVideo qr-decoder={qr_decoder.clone()}></DecoderVideo> }
      }
    }
  }
}

#[wasm_bindgen]
pub fn run() {
  panic::set_hook(Box::new(console_error_panic_hook::hook));

  App::<MyApp>::new().mount("app");
}
