import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default [
	{
		input: 'src/index.js',
		output: {
			name: 'cloneFields',
			file: 'dist/index.js',
			format: 'iife'
		},
		plugins: [
			resolve(),
			babel({
				exclude: 'node_modules/**'
			})
		]
	},
	{
		input: 'src/index.js',
		output: {
			name: 'cloneFields',
			file: 'dist/index.min.js',
			format: 'iife'
		},
		plugins: [
			resolve(),
			babel({
				exclude: 'node_modules/**'
			}),
			terser()
		]
	},
	{
		input: 'src/index.js',
		output: {
			name: pkg.name,
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			resolve(),
			babel({
				exclude: 'node_modules/**'
			})
		]
	},
	{
		input: 'src/index.js',
		output: {
			name: pkg.name,
			file: 'dist/index.umd.min.js',
			format: 'umd'
		},
		plugins: [
			resolve(),
			babel({
				exclude: 'node_modules/**'
			}),
			terser()
		]
	},
	{
		input: 'src/index.js',
		external: [],
		output: [{ file: 'dist/index.cjs.min.js', format: 'cjs' }],
		plugins: [
			resolve(),
			commonjs(),
			babel({
				exclude: 'node_modules/**'
			}),
			terser()
		]
	},
	{
		input: 'src/index.js',
		external: [],
		output: [{ file: pkg.main, format: 'cjs' }],
		plugins: [
			resolve(),
			commonjs(),
			babel({
				exclude: 'node_modules/**'
			})
		]
	},
	{
		input: 'src/index.js',
		external: [],
		output: [{ file: pkg.module, format: 'es' }],
		plugins: [
			resolve(),
			commonjs(),
			babel({
				exclude: 'node_modules/**'
			})
		]
	}
];
