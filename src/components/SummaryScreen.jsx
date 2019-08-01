import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from "react-redux";

import ScoreSmall from './ScoreSmall';

class SummaryScreen extends PureComponent {
	handleClick = () => {
		this.props.dispatch({ type: "RESET_GAME" });
		this.props.dispatch({ type: "CHANGE_GAME_STATE", gameState: "before-game" });
	};

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
						<img className="result-board-background" src={require("images/result_board.png")} alt=""/>
					</div>
					<button className="summary-screen-playbutton" onClick={this.handleClick}>
						<img src={require("images/flappy_bird_title_playbutton.png")} alt="" />
					</button>
				</div>
			</CSSTransition>
		);
	}
}

const mapStateToProps = state => {
	return { game: state.game, score: state.score };
};

export default connect(mapStateToProps)(SummaryScreen);
