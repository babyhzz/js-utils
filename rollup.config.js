import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

const pkg = require("./package.json");

export default {
  input: "src/index.ts",
  output: [
    {
      name: "_",
      file: pkg.main,
      format: "umd",
    },
    {
      file: pkg.module,
      format: "es",
    },
  ],
  plugins: [
    // 查找和打包 node_modules 和其他模块
    resolve(),
    // commonjs 转换成 es6 模块
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    // 代码压缩
    terser(),
  ],
};
