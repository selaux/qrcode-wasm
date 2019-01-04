{ stdenv, fetchFromGitHub, rustPlatform
}:

rustPlatform.buildRustPackage rec {
  name = "cargo-ruukh-${version}";
  version = "0.0.3";

  src = fetchFromGitHub {
    owner = "csharad";
    repo = "cargo-ruukh";
    rev = "8e5341a8fd62877bb231c177a93c41be2c589c4e";
    sha256 = "0zz17z8h52fd4rg8hi1zckh148f3ijz351kxfjb1msfhcqizrhkl";
  };

  cargoSha256 = "1xbswa9q2lccs8y0cyjyhvjrrj86gn03nf282pb5a8ghf2zyggyj";

  doCheck = false;
}