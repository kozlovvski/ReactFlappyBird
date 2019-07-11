import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from "react-redux";

class TitleScreen extends Component {
	handleClick = () => {
		this.props.dispatch({ type: "CHANGE_GAME_STATE", gameState: "before-game" });
	};

	render() {
		return (
			<CSSTransition
				in={this.props.game.state === "title-screen"}
				classNames="title-screen"
				timeout={500}
			>
				<div className="title-screen">
					<img className="flappy-bird-title" src={require("images/flappy_bird_title.png")} alt="" />
					<div className="bird title-bird animated" /> {/* inside scss/Bird.scss */}
					<button className="flappy-bird-title-playbutton" onClick={this.handleClick}>
						<img src={require("images/flappy_bird_title_playbutton.png")} alt="" />
					</button>
				</div>
			</CSSTransition>
		);
	}
}

const mapStateToProps = state => {
	return { game: state.game };
};

export default connect(mapStateToProps)(TitleScreen);
