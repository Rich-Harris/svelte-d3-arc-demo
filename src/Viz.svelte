<script>
	import { arc } from 'd3-shape';

	let angle = Math.PI * 2;

	const segments = [
		{
			"size": 5,
			"label": "this thing",
			"color": "rgb(100,180,200)"
		},
		{
			"size": 8,
			"label": "that thing",
			"color": "rgb(150,200,250)"
		},
		{
			"size": 11,
			"label": "another thing",
			"color": "rgb(80,100,150)"
		}
	];

	const fn = arc();

	$: total = segments.reduce((total, s) => total + s.size, 0);

	let arcs;
	$: {
		let acc = 0;
		arcs = segments.map(segment => {
			const options = {
				innerRadius: 20,
				outerRadius: 40,
				startAngle: acc,
				endAngle: (acc += (angle * segment.size / total))
			};

			return {
				color: segment.color,
				label: segment.label,
				d: fn(options),
				centroid: fn.centroid(options)
			};
		});
	}
</script>

<style>
	input {
		width: 100%;
	}

	svg {
		width: 100%;
		height: calc(100% - 5em);
	}

	path {
	 	stroke: white;
	}

	text {
		font-size: 3px;
		text-anchor: middle;
	}

	.outline {
		stroke: white;
		stroke-width: 0.5px;
	}
</style>

<svg viewBox='0 0 100 100'>
	<g transform='translate(50,50)'>
		{#each arcs as arc}
			<!-- arc -->
			<path d={arc.d} fill={arc.color}/>

			<!-- label -->
			<text class='outline' x={arc.centroid[0]} y={arc.centroid[1]}>{arc.label}</text>
			<text x={arc.centroid[0]} y={arc.centroid[1]}>{arc.label}</text>
		{/each}
	</g>
</svg>

<input bind:value={angle} type="range" min={0} max={Math.PI*2} step={0.01}>