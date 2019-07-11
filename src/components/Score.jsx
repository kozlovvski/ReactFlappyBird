import React, { PureComponent } from 'react'
import { connect } from "react-redux";

class Score extends PureComponent {
	update() {
		document.querySelectorAll(".pipe-container:not(.behind-the-bird)").forEach(pipe => {
			const pipeBox = pipe.getBoundingClientRect()
			const birdBox = document.getElementById("bird").getBoundingClientRect();

			if (pipeBox.right < birdBox.left) {
				pipe.classList.add("behind-the-bird");
				this.props.dispatch({type: "UPDATE_SCORE", package: {current: this.props.score.current + 1}});
			}
		});
	}

	render() {
		return (
			<div>
				{this.props.score.current}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return { score: state.score };
};

export default connect(
	mapStateToProps,
	null,
	null,
	{ forwardRef: true }
)(Score);
