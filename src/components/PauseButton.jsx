import React, { Component } from "react";
import { connect } from "react-redux";

class PauseButton extends Component {
	render() {
		return this.props.isPaused ? (
			<button className="play-button" onClick={() => this.props.dispatch({ type: "RESUME_GAME" })}></button>
		) : (
			<button className="pause-button" onClick={() => this.props.dispatch({ type: "PAUSE_GAME" })}></button>
		);	
	}
}

const mapStateToProps = state => {
	const isPaused = state.game.isPaused;
	return { isPaused };
};

export default connect(mapStateToProps)(PauseButton);
