import React, { PureComponent } from "react";
import { connect } from "react-redux";

class Bird extends PureComponent {
	update() {
		const velocity = this.props.velocity - this.props.gravity;

		// prevent bird from exiting the screen
		let height;
		if (this.props.velocity > 0 && this.props.height > 95) {
			height = this.props.height;
		} else {
			height = this.props.height + this.props.velocity;
		}

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
		const velocity = 1.2;
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

	componentDidUpdate() {
		if(this.props.debug) console.log("Bird updated");
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
	return { ...state.bird, debug: state.debug };
};

export default connect(
	mapStateToProps,
	null,
	null,
	{ forwardRef: true }
)(Bird);
