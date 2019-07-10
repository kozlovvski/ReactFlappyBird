import store from 'redux/store';

export default function didBirdCollideWith(elem) {
	const birdRect = document.getElementById("bird").getBoundingClientRect();
	const elemRect = elem.getBoundingClientRect();

	return !(
		elemRect.left > birdRect.right ||
		elemRect.right < birdRect.left ||
		elemRect.top > birdRect.bottom ||
		elemRect.bottom < birdRect.top
	);
}