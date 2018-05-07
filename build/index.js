const fs = require( 'fs' );
const Viz = require( './Viz-ssr' );
const data = require( '../src/data.json' );

const template = fs.readFileSync( 'src/index.html', 'utf-8' );

const html = template
	.replace( '<!-- viz -->', Viz.render( data ) )
	.replace( '/* css */', Viz.css.code );

fs.writeFileSync( 'index.html', html );
