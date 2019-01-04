let
  pkgs = import ./nix/nixpkgs.nix;
in
with pkgs;
stdenv.mkDerivation {
  name = "openess-of-crime";
  nativeBuildInputs = [
    cargo
    cargo-ruukh
    wasm-bindgen-cli
  ];
}