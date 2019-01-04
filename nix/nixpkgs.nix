let
  # follow master
  mozOverlay = import (builtins.fetchTarball
    https://github.com/mozilla/nixpkgs-mozilla/archive/a7159e93ca1374dfae8389dfc6d966fb37b50903.tar.gz);
  # follow nixpkgs-unstable
  nixpkgs = import (builtins.fetchTarball
    https://github.com/NixOS/nixpkgs-channels/archive/4001dd679f342d184e246f57c9eaf3726033058e.tar.gz);
  fixedRustVersion = self: super: let
    channel = self.rustChannelOf {
      date = "2018-12-15"; channel = "nightly";
    };
  in
  {
    rust = {
      cargo = channel.cargo;
      rustc = channel.rust.override {
        targets = [ "x86_64-unknown-linux-gnu" "wasm32-unknown-unknown" ];
      };
    };
    rustPlatform = super.recurseIntoAttrs (super.makeRustPlatform self.rust);
  };
  ruukh = self: super: {
    cargo-ruukh = super.callPackage (import ./cargo-ruukh.nix) {};
    wasm-bindgen-cli = super.callPackage (import ./wasm-bindgen-cli.nix) {};
  };
in
nixpkgs { overlays = [ mozOverlay fixedRustVersion ruukh ]; }
