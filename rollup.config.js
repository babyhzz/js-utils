import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts",
  output: {
    name: "_",
    file: "dist/index.js",
    format: "umd"
  },
  plugins: [
    // 查找和打包 node_modules 和其他模块
    resolve(),
    // commonjs 转换成 es6 模块
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    // 代码压缩
    terser()
  ]
}