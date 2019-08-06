import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from "react-redux";

import ScoreSmall from './ScoreSmall';

class SummaryScreen extends PureComponent {
	handleClick = () => {
		this.props.dispatch({ type: "RESET_GAME" });
		this.props.dispatch({ type: "CHANGE_GAME_STATE", gameState: "before-game" });
	};

	componentDidUpdate() {
		if(this.props.debug) console.log("SummaryScreen updated");
	}

	render() {
		return (
			<CSSTransition
				in={this.props.game.state === "player-dead"}
				classNames="summary-screen"
				timeout={1000}
			>
				<div className="summary-screen">
					<img className="game-over" src={require("images/game_over.png")} alt="" />
					<div className="result-board">
						<ScoreSmall type="current" />
						<ScoreSmall type="highest" />
						{this.props.score.isRecord && <img className="new-record" src={require("images/new_record.png")} alt="" />}
						<img className="result-board-background" src={require("images/result_board.png")} alt=""/>
					</div>
					<button className="summary-screen-playbutton" aria-label="Press to play again" onClick={this.handleClick}>
						<img src={require("images/flappy_bird_title_playbutton.png")} alt="" />
					</button>
				</div>
			</CSSTransition>
		);
	}
}

const mapStateToProps = state => {
	return { game: state.game, score: state.score, debug: state.debug };
};

export default connect(mapStateToProps)(SummaryScreen);
