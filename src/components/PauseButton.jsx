import React, { PureComponent } from "react";
import { connect } from "react-redux";

class PauseButton extends PureComponent {
	handleClick = e => {
		if (e.target === document.querySelector(".play-button")) {
			this.props.dispatch({ type: "CHANGE_GAME_STATE", gameState: "playing" })
			e.stopPropagation();
		} else {
			this.props.dispatch({ type: "CHANGE_GAME_STATE", gameState: "paused" })
			e.stopPropagation();
		}
	}

	componentDidUpdate() {
		if(this.props.debug) console.log("PauseButton updated");
	}

	render() {
		return this.props.game.state === "paused" ? (
			<button className="play-button" onClick={this.handleClick} aria-label="Press to resume game"></button>
		) : (
			<button className="pause-button" onClick={this.handleClick} aria-label="Press to pause game"></button>
		);	
	}
}

const mapStateToProps = state => {
	return { game: state.game, debug: state.debug };
};

export default connect(mapStateToProps)(PauseButton);
