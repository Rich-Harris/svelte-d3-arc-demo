import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import svelte from 'rollup-plugin-svelte';

export default {
	input: 'src/Viz.svelte',
	output: {
		file: 'build/Viz-ssr.js',
		format: 'cjs'
	},
	plugins: [
		resolve(),
		json(),
		svelte({ generate: 'ssr' })
	]
};