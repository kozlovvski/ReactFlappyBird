export default function didElementsCollide(first, second) {
	const firstRect = first.getBoundingClientRect();
	const secondRect = second.getBoundingClientRect();

	return !(
		secondRect.left > firstRect.right ||
		secondRect.right < firstRect.left ||
		secondRect.top > firstRect.bottom ||
		secondRect.bottom < firstRect.top
	);
}
