import sass from "rollup-plugin-sass";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
      strict: false,
      compact: true,
    },
  ],
  plugins: [
    sass({ insert: true, options: { outputStyle: "compressed" } }),
    typescript({ objectHashIgnoreUnknownHack: true }),
    terser({ toplevel: true }),
  ],
  external: ["react", "react-dom"],
};
