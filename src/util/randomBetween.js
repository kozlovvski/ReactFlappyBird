export default function randomBetween(from, to) {
	return Math.random() * (to - from) + from;
}