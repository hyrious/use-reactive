// @ts-check
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import replace from "@rollup/plugin-replace";
// @ts-ignore
import pkg from "./package.json";

/** @type {import('rollup').RollupOptions} */
const config = {
  input: "src/index.mjs",
  output: [
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
      sourcemapExcludeSources: true,
    },
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
      sourcemapExcludeSources: true,
    },
    {
      file: pkg.jsdelivr,
      format: "iife",
      globals: {
        react: "React",
      },
      name: "UseReactive",
      sourcemap: true,
    },
  ],
  plugins: [
    // @ts-ignore
    external(),
    nodeResolve(),
    commonjs(),
    replace({
      values: {
        __VUE_OPTIONS_API__: JSON.stringify(false),
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
        "process.env.NODE_ENV": JSON.stringify("production"),
      },
      preventAssignment: true,
    }),
    terser(),
  ],
};

export default config;
