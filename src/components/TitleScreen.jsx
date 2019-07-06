import React, { Component } from "react";
import { connect } from "react-redux";

class TitleScreen extends Component {
	handleClick = () => {
		this.props.dispatch({type: "CHANGE_GAME_STATE", gameState: "before-game"})
	};

	render() {
		return (
			<div id="title-screen">
				<img className="flappy-bird-title" src={require("images/flappy_bird_title.png")} alt="" />
				<div id="bird" className="title-bird animated" /> {/* inside scss/Bird.scss */}
				<button className="flappy-bird-title-playbutton" onClick={this.handleClick}>
					<img src={require("images/flappy_bird_title_playbutton.png")} alt="" />
				</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { game: state.game };
};

export default connect(mapStateToProps)(TitleScreen);
