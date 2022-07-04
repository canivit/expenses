{
  description = "Simple expense tracking app built with React.js";

  outputs = { self, nixpkgs }: let
    pkgs = import nixpkgs {
      system = "x86_64-linux";
    };
  in {
    devShell.x86_64-linux = pkgs.mkShell {
      name = "expenses";
      buildInputs = with pkgs; [
        nodejs
        nodePackages.yarn
      ];
      shellHook = ''
        export PATH=$PWD/src/frontend/node_modules/.bin:$PATH
      '';
    };
  };
}
