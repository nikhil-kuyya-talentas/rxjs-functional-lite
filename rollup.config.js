import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import multiInput from "rollup-plugin-multi-input";
import serve from "rollup-plugin-serve";
import commonjs from "rollup-plugin-commonjs";

export default [
  {
    input: "./samples/mouse-event/index.ts",
    output: [
      {
        dir: "./samples/mouse-event/",
        entryFileNames: "index.js",
        format: "cjs",
      },
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript(),
      multiInput(),
      serve({
        open: true,
        host: "localhost",
        port: 12345,
        verbose: true,
        contentBase: "samples/mouse-event",
      }),
    ],
  },
];
