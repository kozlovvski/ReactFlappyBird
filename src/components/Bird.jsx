import React, { Component } from "react";
import { connect } from "react-redux";

class Bird extends Component {
	update() {
		if (!this.props.isPaused) {
			const rotation = this.props.rotation + 1;
			this.props.dispatch({
				type: "UPDATE_BIRD",
				package: { height: 0, velocity: 0, gravity: 0, rotation }
			});
		}
	}

	jump() {

	}

	render() {
		return <div id="bird" />;
	}
}

const mapStateToProps = state => {
	const isPaused = state.game.isPaused;
	return { isPaused, ...state.bird };
};

export default connect(
	mapStateToProps,
	null,
	null,
	{ forwardRef: true }
)(Bird);
