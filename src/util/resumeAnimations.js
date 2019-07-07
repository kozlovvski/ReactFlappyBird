export default function resumeAnimations() {
	document
		.querySelectorAll(".animated")
		.forEach(elem => (elem.style.animationPlayState = "running"));
}