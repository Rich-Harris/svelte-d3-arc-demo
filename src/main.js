import Viz from './Viz.html';
import data from './data.json';

document.body.innerHTML = '';

new Viz({
	target: document.body,
	data
});