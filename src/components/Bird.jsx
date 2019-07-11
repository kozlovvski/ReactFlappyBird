import React, { Component } from "react";
import { connect } from "react-redux";

class Bird extends Component {
	update() {
		const velocity = this.props.velocity - this.props.gravity;
		const height = this.props.height + velocity;
		const rotation = this.props.rotation + 2;

		this.props.dispatch({
			type: "UPDATE_BIRD",
			package: { height, velocity, rotation }
		});
	}

	hover() {
		const hoverDegree = this.props.hoverDegree + 0.1;
		const delta = Math.sin(hoverDegree) / 5; // returns values from -0.2 to 0.2
		const height = this.props.height + delta;

		this.props.dispatch({
			type: "UPDATE_BIRD",
			package: { height, hoverDegree }
		});
	}

	jump() {
		const velocity = 0.9;
		const rotation = -30;

		this.props.dispatch({
			type: "UPDATE_BIRD",
			package: { velocity, rotation }
		});
	}

	fallToTheGround() {
		if (this.props.height > 0) {
			const velocity = this.props.velocity - this.props.gravity;
			const height = this.props.height + velocity;
			const rotation = this.props.rotation + 2;

			this.props.dispatch({
				type: "UPDATE_BIRD",
				package: { height, velocity, rotation }
			});
		}
	}

	render() {
		return (
			<div
				id="bird"
				className="bird animated"
				style={{ bottom: this.props.height + "%", transform: `rotate(${this.props.rotation}deg)` }}
			/>
		);
	}
}

const mapStateToProps = state => {
	return { ...state.bird };
};

export default connect(
	mapStateToProps,
	null,
	null,
	{ forwardRef: true }
)(Bird);
