import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import svelte from 'rollup-plugin-svelte';
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

export default {
	input: 'src/main.js',
	output: {
		file: 'bundle.js',
		format: 'iife'
	},
	plugins: [
		resolve(),
		json(),
		svelte({ css: false }),
		buble(),
		uglify()
	]
};
