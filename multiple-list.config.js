import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import multiInput from "rollup-plugin-multi-input";
import serve from "rollup-plugin-serve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import { eslint } from "rollup-plugin-eslint";

export default [
  {
    input: "./samples/multiple-lists-test/index.ts",
    output: [
      {
        dir: "./samples/multiple-lists-test/",
        format: "cjs",
        entryFileNames: "index.js",
      },
    ],
    plugins: [
      multiInput(),
      typescript(),
      nodeResolve({
        jsnext: true,
        browser: true,
      }),
      commonjs(),
      eslint(),
      babel({
        exclude: "node_modules/**",
      }),
      serve({
        open: true,
        host: "localhost",
        port: 12345,
        verbose: true,
        contentBase: "./samples",
      }),
    ],
  },
];
