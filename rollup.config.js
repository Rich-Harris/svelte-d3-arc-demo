import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';

export default {
	input: 'src/main.js',
	output: {
		file: 'bundle.js',
		format: 'iife',
	},
	plugins: [
		resolve(),
		json(),
		svelte({ css: false }),
		terser()
	]
};