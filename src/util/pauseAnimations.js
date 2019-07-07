export default function pauseAnimations() {
	document
		.querySelectorAll(".animated")
		.forEach(elem => (elem.style.animationPlayState = "paused"));
}