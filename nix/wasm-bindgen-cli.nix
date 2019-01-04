{ stdenv, fetchurl, rustPlatform, openssl, pkgconfig }:
let
  name = "wasm-bindgen-cli-${version}";
  version = "0.2.29";
  lockfile = ./wasm-bindgen-cli.lock;
  src = stdenv.mkDerivation {
    name = "${name}-src";
    src = fetchurl {
      url = "https://crates.io/api/v1/crates/wasm-bindgen-cli/${version}/download";
      name = "${name}.tar";
      sha256 = "04cggmdb9vp5jyafr4i5h9xv4afwz9srrb7d830mc28sx4zlbsha";
    };

    installPhase = ''
      mkdir -p $out
      cp -r ./* $out/
      cp ${lockfile} $out/Cargo.lock
    '';
  };
in
rustPlatform.buildRustPackage rec {
  inherit name;
  inherit version;
  inherit src;

  nativeBuildInputs = [ openssl pkgconfig ];
  cargoSha256 = "0xq26fkibxl6qa8hbh654js6blc00lgga9r52b9m3j49hix22zdx";

  doCheck = false;
}