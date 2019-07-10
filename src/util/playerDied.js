import didElementsCollide from './didElementsCollide'

export default function playerDied() {
	const bird = document.getElementById("bird");
	const land = document.getElementById("land");
	
	if (didElementsCollide(bird, land)) return true; // player dies if bird hits the ground

	const pipes = Array.from(document.getElementsByClassName("pipe"));

	if (pipes.length === 0) return false; // don't check if player hit a pipe if there are no pipes

	return !pipes.every(pipe => !didElementsCollide(pipe, bird));

	// TODO: make it more efficient by:
	// 1. removing offscreen pipes from DOM
	// 2. checking only previous and next pipe
}