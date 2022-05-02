import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const extensions = ['.ts', '.js', '.json'];

export default {
  input: 'src/index.ts',
  output: [
    {
      name: '_',
      file: pkg.main,
      format: 'umd',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [
    resolve({
      extensions
    }),
    commonjs(),
    babel({
      extensions,
      exclude: 'node_modules/**',
      babelHelpers: 'runtime'
    }),
    terser(),
  ],
};
