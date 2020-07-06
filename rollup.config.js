import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import multiInput from "rollup-plugin-multi-input";
import serve from "rollup-plugin-serve";
import sourcemaps from "rollup-plugin-sourcemaps";

export default [
  {
    input: "./samples/hot-cold/index.ts",
    output: [
      {
        dir: "./",
        entryFileNames: "index.js",
        format: "cjs",
      },
    ],
    plugins: [
      nodeResolve(),
      typescript(),
      multiInput(),
      serve({
        open: true,
        host: "localhost",
        port: 12345,
        verbose: true,
        contentBase: "samples",
      }),
    ],
  },
];
