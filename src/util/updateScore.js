import store from 'redux/store';

export default function updateScore() {
	const state = store.getState();
	document.querySelectorAll(".pipe-container:not(.behind-the-bird)").forEach(pipe => {
		const pipeBox = pipe.getBoundingClientRect()
		const birdBox = document.getElementById("bird").getBoundingClientRect();
	
		if (pipeBox.right < birdBox.left) {
			pipe.classList.add("behind-the-bird");
			store.dispatch({type: "UPDATE_SCORE", package: {current: state.score.current + 1}});
		}
	});
}

