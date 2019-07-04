import React, { Component } from "react";
import { connect } from "react-redux";

class PauseButton extends Component {

	handleClick = e => {
		if (e.target === document.querySelector(".play-button")) {
			this.props.dispatch({ type: "RESUME_GAME" })
			e.stopPropagation();
		} else {
			this.props.dispatch({ type: "PAUSE_GAME" })
			e.stopPropagation();
		}
	}

	render() {
		return this.props.isPaused ? (
			<button className="play-button" onClick={this.handleClick}></button>
		) : (
			<button className="pause-button" onClick={this.handleClick}></button>
		);	
	}
}

const mapStateToProps = state => {
	const isPaused = state.game.isPaused;
	return { isPaused };
};

export default connect(mapStateToProps)(PauseButton);
