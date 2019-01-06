(function() {
    var wasm;
    const __exports = {};
    /**
    * @returns {void}
    */
    __exports.run = function() {
        return wasm.run();
    };

    let cachedTextDecoder = new TextDecoder('utf-8');

    let cachegetUint8Memory = null;
    function getUint8Memory() {
        if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
            cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
        }
        return cachegetUint8Memory;
    }

    function getStringFromWasm(ptr, len) {
        return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
    }

    __exports.__wbg_error_cc95a3d302735ca3 = function(arg0, arg1) {
        let varg0 = getStringFromWasm(arg0, arg1);

        varg0 = varg0.slice();
        wasm.__wbindgen_free(arg0, arg1 * 1);

        console.error(varg0);
    };

    const heap = new Array(32);

    heap.fill(undefined);

    heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

const __widl_f_log_1__target = console.log;

__exports.__widl_f_log_1_ = function(arg0) {
    __widl_f_log_1__target(getObject(arg0));
};

const __widl_f_time__target = console.time;

__exports.__widl_f_time_ = function() {
    __widl_f_time__target();
};

const __widl_f_time_end__target = console.timeEnd;

__exports.__widl_f_time_end_ = function() {
    __widl_f_time_end__target();
};

__exports.__widl_instanceof_CanvasRenderingContext2D = function(idx) {
    return getObject(idx) instanceof CanvasRenderingContext2D ? 1 : 0;
};

const __widl_f_draw_image_with_html_video_element_CanvasRenderingContext2D_target = typeof CanvasRenderingContext2D === 'undefined' ? null : CanvasRenderingContext2D.prototype.drawImage || function() {
    throw new Error(`wasm-bindgen: CanvasRenderingContext2D.drawImage does not exist`);
};

let cachegetUint32Memory = null;
function getUint32Memory() {
    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== wasm.memory.buffer) {
        cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
    }
    return cachegetUint32Memory;
}

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

__exports.__widl_f_draw_image_with_html_video_element_CanvasRenderingContext2D = function(arg0, arg1, arg2, arg3, exnptr) {
    try {
        __widl_f_draw_image_with_html_video_element_CanvasRenderingContext2D_target.call(getObject(arg0), getObject(arg1), arg2, arg3);
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

function GetOwnOrInheritedPropertyDescriptor(obj, id) {
    while (obj) {
        let desc = Object.getOwnPropertyDescriptor(obj, id);
        if (desc) return desc;
        obj = Object.getPrototypeOf(obj);
    }
return {}
}

const __widl_f_set_stroke_style_CanvasRenderingContext2D_target = GetOwnOrInheritedPropertyDescriptor(typeof CanvasRenderingContext2D === 'undefined' ? null : CanvasRenderingContext2D.prototype, 'strokeStyle').set || function() {
    throw new Error(`wasm-bindgen: CanvasRenderingContext2D.strokeStyle does not exist`);
};

__exports.__widl_f_set_stroke_style_CanvasRenderingContext2D = function(arg0, arg1) {
    __widl_f_set_stroke_style_CanvasRenderingContext2D_target.call(getObject(arg0), getObject(arg1));
};

const __widl_f_stroke_rect_CanvasRenderingContext2D_target = typeof CanvasRenderingContext2D === 'undefined' ? null : CanvasRenderingContext2D.prototype.strokeRect || function() {
    throw new Error(`wasm-bindgen: CanvasRenderingContext2D.strokeRect does not exist`);
};

__exports.__widl_f_stroke_rect_CanvasRenderingContext2D = function(arg0, arg1, arg2, arg3, arg4) {
    __widl_f_stroke_rect_CanvasRenderingContext2D_target.call(getObject(arg0), arg1, arg2, arg3, arg4);
};

const __widl_f_create_comment_Document_target = typeof Document === 'undefined' ? null : Document.prototype.createComment || function() {
    throw new Error(`wasm-bindgen: Document.createComment does not exist`);
};

__exports.__widl_f_create_comment_Document = function(arg0, arg1, arg2) {
    let varg1 = getStringFromWasm(arg1, arg2);
    return addHeapObject(__widl_f_create_comment_Document_target.call(getObject(arg0), varg1));
};

const __widl_f_create_element_Document_target = typeof Document === 'undefined' ? null : Document.prototype.createElement || function() {
    throw new Error(`wasm-bindgen: Document.createElement does not exist`);
};

__exports.__widl_f_create_element_Document = function(arg0, arg1, arg2, exnptr) {
    let varg1 = getStringFromWasm(arg1, arg2);
    try {
        return addHeapObject(__widl_f_create_element_Document_target.call(getObject(arg0), varg1));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

const __widl_f_create_text_node_Document_target = typeof Document === 'undefined' ? null : Document.prototype.createTextNode || function() {
    throw new Error(`wasm-bindgen: Document.createTextNode does not exist`);
};

__exports.__widl_f_create_text_node_Document = function(arg0, arg1, arg2) {
    let varg1 = getStringFromWasm(arg1, arg2);
    return addHeapObject(__widl_f_create_text_node_Document_target.call(getObject(arg0), varg1));
};

function isLikeNone(x) {
    return x === undefined || x === null;
}

const __widl_f_get_element_by_id_Document_target = typeof Document === 'undefined' ? null : Document.prototype.getElementById || function() {
    throw new Error(`wasm-bindgen: Document.getElementById does not exist`);
};

__exports.__widl_f_get_element_by_id_Document = function(arg0, arg1, arg2) {
    let varg1 = getStringFromWasm(arg1, arg2);

    const val = __widl_f_get_element_by_id_Document_target.call(getObject(arg0), varg1);
    return isLikeNone(val) ? 0 : addHeapObject(val);

};

const __widl_f_remove_attribute_Element_target = typeof Element === 'undefined' ? null : Element.prototype.removeAttribute || function() {
    throw new Error(`wasm-bindgen: Element.removeAttribute does not exist`);
};

__exports.__widl_f_remove_attribute_Element = function(arg0, arg1, arg2, exnptr) {
    let varg1 = getStringFromWasm(arg1, arg2);
    try {
        __widl_f_remove_attribute_Element_target.call(getObject(arg0), varg1);
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

const __widl_f_set_attribute_Element_target = typeof Element === 'undefined' ? null : Element.prototype.setAttribute || function() {
    throw new Error(`wasm-bindgen: Element.setAttribute does not exist`);
};

__exports.__widl_f_set_attribute_Element = function(arg0, arg1, arg2, arg3, arg4, exnptr) {
    let varg1 = getStringFromWasm(arg1, arg2);
    let varg3 = getStringFromWasm(arg3, arg4);
    try {
        __widl_f_set_attribute_Element_target.call(getObject(arg0), varg1, varg3);
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

const __widl_f_add_event_listener_with_callback_EventTarget_target = typeof EventTarget === 'undefined' ? null : EventTarget.prototype.addEventListener || function() {
    throw new Error(`wasm-bindgen: EventTarget.addEventListener does not exist`);
};

__exports.__widl_f_add_event_listener_with_callback_EventTarget = function(arg0, arg1, arg2, arg3, exnptr) {
    let varg1 = getStringFromWasm(arg1, arg2);
    try {
        __widl_f_add_event_listener_with_callback_EventTarget_target.call(getObject(arg0), varg1, getObject(arg3));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

const __widl_f_remove_event_listener_with_callback_EventTarget_target = typeof EventTarget === 'undefined' ? null : EventTarget.prototype.removeEventListener || function() {
    throw new Error(`wasm-bindgen: EventTarget.removeEventListener does not exist`);
};

__exports.__widl_f_remove_event_listener_with_callback_EventTarget = function(arg0, arg1, arg2, arg3, exnptr) {
    let varg1 = getStringFromWasm(arg1, arg2);
    try {
        __widl_f_remove_event_listener_with_callback_EventTarget_target.call(getObject(arg0), varg1, getObject(arg3));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

__exports.__widl_instanceof_HTMLCanvasElement = function(idx) {
    return getObject(idx) instanceof HTMLCanvasElement ? 1 : 0;
};

const __widl_f_get_context_HTMLCanvasElement_target = typeof HTMLCanvasElement === 'undefined' ? null : HTMLCanvasElement.prototype.getContext || function() {
    throw new Error(`wasm-bindgen: HTMLCanvasElement.getContext does not exist`);
};

__exports.__widl_f_get_context_HTMLCanvasElement = function(arg0, arg1, arg2, exnptr) {
    let varg1 = getStringFromWasm(arg1, arg2);
    try {

        const val = __widl_f_get_context_HTMLCanvasElement_target.call(getObject(arg0), varg1);
        return isLikeNone(val) ? 0 : addHeapObject(val);

    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

let cachedTextEncoder = new TextEncoder('utf-8');

let WASM_VECTOR_LEN = 0;

function passStringToWasm(arg) {

    const buf = cachedTextEncoder.encode(arg);
    const ptr = wasm.__wbindgen_malloc(buf.length);
    getUint8Memory().set(buf, ptr);
    WASM_VECTOR_LEN = buf.length;
    return ptr;
}

const __widl_f_to_data_url_HTMLCanvasElement_target = typeof HTMLCanvasElement === 'undefined' ? null : HTMLCanvasElement.prototype.toDataURL || function() {
    throw new Error(`wasm-bindgen: HTMLCanvasElement.toDataURL does not exist`);
};

__exports.__widl_f_to_data_url_HTMLCanvasElement = function(ret, arg0, exnptr) {
    try {

        const retptr = passStringToWasm(__widl_f_to_data_url_HTMLCanvasElement_target.call(getObject(arg0)));
        const retlen = WASM_VECTOR_LEN;
        const mem = getUint32Memory();
        mem[ret / 4] = retptr;
        mem[ret / 4 + 1] = retlen;

    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

const __widl_f_set_width_HTMLCanvasElement_target = GetOwnOrInheritedPropertyDescriptor(typeof HTMLCanvasElement === 'undefined' ? null : HTMLCanvasElement.prototype, 'width').set || function() {
    throw new Error(`wasm-bindgen: HTMLCanvasElement.width does not exist`);
};

__exports.__widl_f_set_width_HTMLCanvasElement = function(arg0, arg1) {
    __widl_f_set_width_HTMLCanvasElement_target.call(getObject(arg0), arg1);
};

const __widl_f_set_height_HTMLCanvasElement_target = GetOwnOrInheritedPropertyDescriptor(typeof HTMLCanvasElement === 'undefined' ? null : HTMLCanvasElement.prototype, 'height').set || function() {
    throw new Error(`wasm-bindgen: HTMLCanvasElement.height does not exist`);
};

__exports.__widl_f_set_height_HTMLCanvasElement = function(arg0, arg1) {
    __widl_f_set_height_HTMLCanvasElement_target.call(getObject(arg0), arg1);
};

const __widl_f_offset_width_HTMLElement_target = GetOwnOrInheritedPropertyDescriptor(typeof HTMLElement === 'undefined' ? null : HTMLElement.prototype, 'offsetWidth').get || function() {
    throw new Error(`wasm-bindgen: HTMLElement.offsetWidth does not exist`);
};

__exports.__widl_f_offset_width_HTMLElement = function(arg0) {
    return __widl_f_offset_width_HTMLElement_target.call(getObject(arg0));
};

const __widl_f_offset_height_HTMLElement_target = GetOwnOrInheritedPropertyDescriptor(typeof HTMLElement === 'undefined' ? null : HTMLElement.prototype, 'offsetHeight').get || function() {
    throw new Error(`wasm-bindgen: HTMLElement.offsetHeight does not exist`);
};

__exports.__widl_f_offset_height_HTMLElement = function(arg0) {
    return __widl_f_offset_height_HTMLElement_target.call(getObject(arg0));
};

__exports.__widl_instanceof_HTMLMediaElement = function(idx) {
    return getObject(idx) instanceof HTMLMediaElement ? 1 : 0;
};

const __widl_f_play_HTMLMediaElement_target = typeof HTMLMediaElement === 'undefined' ? null : HTMLMediaElement.prototype.play || function() {
    throw new Error(`wasm-bindgen: HTMLMediaElement.play does not exist`);
};

__exports.__widl_f_play_HTMLMediaElement = function(arg0, exnptr) {
    try {
        return addHeapObject(__widl_f_play_HTMLMediaElement_target.call(getObject(arg0)));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

const __widl_f_set_src_object_HTMLMediaElement_target = GetOwnOrInheritedPropertyDescriptor(typeof HTMLMediaElement === 'undefined' ? null : HTMLMediaElement.prototype, 'srcObject').set || function() {
    throw new Error(`wasm-bindgen: HTMLMediaElement.srcObject does not exist`);
};

__exports.__widl_f_set_src_object_HTMLMediaElement = function(arg0, arg1) {
    __widl_f_set_src_object_HTMLMediaElement_target.call(getObject(arg0), getObject(arg1));
};

__exports.__widl_instanceof_HTMLVideoElement = function(idx) {
    return getObject(idx) instanceof HTMLVideoElement ? 1 : 0;
};

const __widl_f_get_user_media_with_constraints_MediaDevices_target = typeof MediaDevices === 'undefined' ? null : MediaDevices.prototype.getUserMedia || function() {
    throw new Error(`wasm-bindgen: MediaDevices.getUserMedia does not exist`);
};

__exports.__widl_f_get_user_media_with_constraints_MediaDevices = function(arg0, arg1, exnptr) {
    try {
        return addHeapObject(__widl_f_get_user_media_with_constraints_MediaDevices_target.call(getObject(arg0), getObject(arg1)));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

__exports.__widl_instanceof_MediaStream = function(idx) {
    return getObject(idx) instanceof MediaStream ? 1 : 0;
};

const __widl_f_clone_MediaStream_target = typeof MediaStream === 'undefined' ? null : MediaStream.prototype.clone || function() {
    throw new Error(`wasm-bindgen: MediaStream.clone does not exist`);
};

__exports.__widl_f_clone_MediaStream = function(arg0) {
    return addHeapObject(__widl_f_clone_MediaStream_target.call(getObject(arg0)));
};

const __widl_f_id_MediaStream_target = GetOwnOrInheritedPropertyDescriptor(typeof MediaStream === 'undefined' ? null : MediaStream.prototype, 'id').get || function() {
    throw new Error(`wasm-bindgen: MediaStream.id does not exist`);
};

__exports.__widl_f_id_MediaStream = function(ret, arg0) {

    const retptr = passStringToWasm(__widl_f_id_MediaStream_target.call(getObject(arg0)));
    const retlen = WASM_VECTOR_LEN;
    const mem = getUint32Memory();
    mem[ret / 4] = retptr;
    mem[ret / 4 + 1] = retlen;

};

__exports.__widl_f_new_MessageChannel = function(exnptr) {
    try {
        return addHeapObject(new MessageChannel());
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

const __widl_f_port1_MessageChannel_target = GetOwnOrInheritedPropertyDescriptor(typeof MessageChannel === 'undefined' ? null : MessageChannel.prototype, 'port1').get || function() {
    throw new Error(`wasm-bindgen: MessageChannel.port1 does not exist`);
};

__exports.__widl_f_port1_MessageChannel = function(arg0) {
    return addHeapObject(__widl_f_port1_MessageChannel_target.call(getObject(arg0)));
};

const __widl_f_port2_MessageChannel_target = GetOwnOrInheritedPropertyDescriptor(typeof MessageChannel === 'undefined' ? null : MessageChannel.prototype, 'port2').get || function() {
    throw new Error(`wasm-bindgen: MessageChannel.port2 does not exist`);
};

__exports.__widl_f_port2_MessageChannel = function(arg0) {
    return addHeapObject(__widl_f_port2_MessageChannel_target.call(getObject(arg0)));
};

const __widl_f_post_message_MessagePort_target = typeof MessagePort === 'undefined' ? null : MessagePort.prototype.postMessage || function() {
    throw new Error(`wasm-bindgen: MessagePort.postMessage does not exist`);
};

__exports.__widl_f_post_message_MessagePort = function(arg0, arg1, exnptr) {
    try {
        __widl_f_post_message_MessagePort_target.call(getObject(arg0), getObject(arg1));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

const __widl_f_set_onmessage_MessagePort_target = GetOwnOrInheritedPropertyDescriptor(typeof MessagePort === 'undefined' ? null : MessagePort.prototype, 'onmessage').set || function() {
    throw new Error(`wasm-bindgen: MessagePort.onmessage does not exist`);
};

__exports.__widl_f_set_onmessage_MessagePort = function(arg0, arg1) {
    __widl_f_set_onmessage_MessagePort_target.call(getObject(arg0), getObject(arg1));
};

const __widl_f_media_devices_Navigator_target = GetOwnOrInheritedPropertyDescriptor(typeof Navigator === 'undefined' ? null : Navigator.prototype, 'mediaDevices').get || function() {
    throw new Error(`wasm-bindgen: Navigator.mediaDevices does not exist`);
};

__exports.__widl_f_media_devices_Navigator = function(arg0, exnptr) {
    try {
        return addHeapObject(__widl_f_media_devices_Navigator_target.call(getObject(arg0)));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

const __widl_f_insert_before_Node_target = typeof Node === 'undefined' ? null : Node.prototype.insertBefore || function() {
    throw new Error(`wasm-bindgen: Node.insertBefore does not exist`);
};

__exports.__widl_f_insert_before_Node = function(arg0, arg1, arg2, exnptr) {
    try {
        return addHeapObject(__widl_f_insert_before_Node_target.call(getObject(arg0), getObject(arg1), getObject(arg2)));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

const __widl_f_remove_child_Node_target = typeof Node === 'undefined' ? null : Node.prototype.removeChild || function() {
    throw new Error(`wasm-bindgen: Node.removeChild does not exist`);
};

__exports.__widl_f_remove_child_Node = function(arg0, arg1, exnptr) {
    try {
        return addHeapObject(__widl_f_remove_child_Node_target.call(getObject(arg0), getObject(arg1)));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

const __widl_f_set_text_content_Node_target = GetOwnOrInheritedPropertyDescriptor(typeof Node === 'undefined' ? null : Node.prototype, 'textContent').set || function() {
    throw new Error(`wasm-bindgen: Node.textContent does not exist`);
};

__exports.__widl_f_set_text_content_Node = function(arg0, arg1, arg2) {
    let varg1 = arg1 == 0 ? undefined : getStringFromWasm(arg1, arg2);
    __widl_f_set_text_content_Node_target.call(getObject(arg0), varg1);
};

__exports.__widl_instanceof_Window = function(idx) {
    return getObject(idx) instanceof Window ? 1 : 0;
};

__exports.__widl_f_document_Window = function(arg0) {

    const val = getObject(arg0).document;
    return isLikeNone(val) ? 0 : addHeapObject(val);

};

__exports.__widl_f_navigator_Window = function(arg0) {
    return addHeapObject(getObject(arg0).navigator);
};

__exports.__widl_f_set_interval_with_callback_and_timeout_and_arguments_0_Window = function(arg0, arg1, arg2, exnptr) {
    try {
        return getObject(arg0).setInterval(getObject(arg1), arg2);
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

__exports.__wbg_newnoargs_6a80f84471205fc8 = function(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    return addHeapObject(new Function(varg0));
};

__exports.__wbg_call_582b20dfcad7fee4 = function(arg0, arg1, exnptr) {
    try {
        return addHeapObject(getObject(arg0).call(getObject(arg1)));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

__exports.__wbg_call_8ebb2e9cebdce6f5 = function(arg0, arg1, arg2, exnptr) {
    try {
        return addHeapObject(getObject(arg0).call(getObject(arg1), getObject(arg2)));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

__exports.__wbg_new_87f236e6bb64256a = function() {
    return addHeapObject(new Object());
};

__exports.__wbg_set_345cb607cede9a14 = function(arg0, arg1, arg2, exnptr) {
    try {
        return Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

__exports.__wbg_new_9cc98abd8c2c45e2 = function(arg0, arg1) {
    let cbarg0 = function(arg0, arg1) {
        let a = this.a;
        this.a = 0;
        try {
            return this.f(a, this.b, addHeapObject(arg0), addHeapObject(arg1));

        } finally {
            this.a = a;

        }

    };
    cbarg0.f = wasm.__wbg_function_table.get(127);
    cbarg0.a = arg0;
    cbarg0.b = arg1;
    try {
        return addHeapObject(new Promise(cbarg0.bind(cbarg0)));
    } finally {
        cbarg0.a = cbarg0.b = 0;

    }
};

__exports.__wbg_resolve_71812a6f3480e88d = function(arg0) {
    return addHeapObject(Promise.resolve(getObject(arg0)));
};

__exports.__wbg_then_8cbc8dd8be3dea68 = function(arg0, arg1) {
    return addHeapObject(getObject(arg0).then(getObject(arg1)));
};

__exports.__wbg_then_d87f182e0a9564c7 = function(arg0, arg1, arg2) {
    return addHeapObject(getObject(arg0).then(getObject(arg1), getObject(arg2)));
};

__exports.__wbindgen_object_clone_ref = function(idx) {
    return addHeapObject(getObject(idx));
};

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

__exports.__wbindgen_object_drop_ref = function(i) { dropObject(i); };

__exports.__wbindgen_string_new = function(p, l) {
    return addHeapObject(getStringFromWasm(p, l));
};

__exports.__wbindgen_number_get = function(n, invalid) {
    let obj = getObject(n);
    if (typeof(obj) === 'number') return obj;
    getUint8Memory()[invalid] = 1;
    return 0;
};

__exports.__wbindgen_is_null = function(idx) {
    return getObject(idx) === null ? 1 : 0;
};

__exports.__wbindgen_is_undefined = function(idx) {
    return getObject(idx) === undefined ? 1 : 0;
};

__exports.__wbindgen_boolean_get = function(i) {
    let v = getObject(i);
    if (typeof(v) === 'boolean') {
        return v ? 1 : 0;
    } else {
        return 2;
    }
};

__exports.__wbindgen_is_symbol = function(i) {
    return typeof(getObject(i)) === 'symbol' ? 1 : 0;
};

__exports.__wbindgen_string_get = function(i, len_ptr) {
    let obj = getObject(i);
    if (typeof(obj) !== 'string') return 0;
    const ptr = passStringToWasm(obj);
    getUint32Memory()[len_ptr / 4] = WASM_VECTOR_LEN;
    return ptr;
};

__exports.__wbindgen_cb_drop = function(i) {
    const obj = getObject(i).original;
    dropObject(i);
    if (obj.cnt-- == 1) {
        obj.a = 0;
        return 1;
    }
    return 0;
};

__exports.__wbindgen_cb_forget = dropObject;

__exports.__wbindgen_closure_wrapper15 = function(a, b, _ignored) {
    const f = wasm.__wbg_function_table.get(2);
    const d = wasm.__wbg_function_table.get(3);
    const cb = function(arg0) {
        this.cnt++;
        let a = this.a;
        this.a = 0;
        try {
            return f(a, b, addHeapObject(arg0));

        } finally {
            this.a = a;
            if (this.cnt-- == 1) d(this.a, b);

        }

    };
    cb.a = a;
    cb.cnt = 1;
    let real = cb.bind(cb);
    real.original = cb;
    return addHeapObject(real);
};

__exports.__wbindgen_closure_wrapper17 = function(a, b, _ignored) {
    const f = wasm.__wbg_function_table.get(6);
    const d = wasm.__wbg_function_table.get(3);
    const cb = function() {
        this.cnt++;
        try {
            return f(this.a, b);

        } finally {
            if (this.cnt-- == 1) d(this.a, b);

        }

    };
    cb.a = a;
    cb.cnt = 1;
    let real = cb.bind(cb);
    real.original = cb;
    return addHeapObject(real);
};

__exports.__wbindgen_closure_wrapper19 = function(a, b, _ignored) {
    const f = wasm.__wbg_function_table.get(2);
    const d = wasm.__wbg_function_table.get(3);
    const cb = function(arg0) {
        this.cnt++;
        try {
            return f(this.a, b, addHeapObject(arg0));

        } finally {
            if (this.cnt-- == 1) d(this.a, b);

        }

    };
    cb.a = a;
    cb.cnt = 1;
    let real = cb.bind(cb);
    real.original = cb;
    return addHeapObject(real);
};

__exports.__wbindgen_closure_wrapper183 = function(a, b, _ignored) {
    const f = wasm.__wbg_function_table.get(88);
    const d = wasm.__wbg_function_table.get(89);
    const cb = function(arg0) {
        this.cnt++;
        let a = this.a;
        this.a = 0;
        try {
            return f(a, b, addHeapObject(arg0));

        } finally {
            this.a = a;
            if (this.cnt-- == 1) d(this.a, b);

        }

    };
    cb.a = a;
    cb.cnt = 1;
    let real = cb.bind(cb);
    real.original = cb;
    return addHeapObject(real);
};

__exports.__wbindgen_throw = function(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
};

function init(path_or_module) {
    let instantiation;
    const imports = { './qrcode_wasm': __exports };
    if (path_or_module instanceof WebAssembly.Module) {
        instantiation = WebAssembly.instantiate(path_or_module, imports)
        .then(instance => {
        return { instance, module: path_or_module }
    });
} else {
    const data = fetch(path_or_module);
    if (typeof WebAssembly.instantiateStreaming === 'function') {
        instantiation = WebAssembly.instantiateStreaming(data, imports);
    } else {
        instantiation = data
        .then(response => response.arrayBuffer())
        .then(buffer => WebAssembly.instantiate(buffer, imports));
    }
}
return instantiation.then(({instance}) => {
    wasm = init.wasm = instance.exports;

});
};
self.wasm_bindgen = Object.assign(init, __exports);
})();
