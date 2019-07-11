import React, { Component } from "react";
import { connect } from "react-redux";
import Bird from "components/Bird";
import PauseButton from "components/PauseButton";
import Land from "components/Land";
import Background from "components/Background";
import TitleScreen from "components/TitleScreen";
import HelpScreen from "components/HelpScreen";
import GameArea from "components/GameArea";
import Pipes from "components/Pipes";

import pauseAnimations from "util/pauseAnimations";
import resumeAnimations from "util/resumeAnimations";
import playerDied from "util/playerDied";
import Score from "components/Score";

class App extends Component {
	constructor(props) {
		super(props);

		this.bird = React.createRef();
		this.pipes = React.createRef();
		this.score = React.createRef();
	}

	componentDidMount() {
		this.props.dispatch({ type: "CHANGE_GAME_STATE", gameState: "title-screen" });
		this.animationProp = window.requestAnimationFrame(() => this.gameLoop());
	}

	gameLoop() {
		switch (this.props.game.state) {
			case "title-screen":
				break;

			case "before-game":
				this.bird.current.hover();
				break;

			case "playing":
				resumeAnimations(); // in case we were in "paused" state
				this.bird.current.update();
				this.pipes.current.update();
				this.pipes.current.removeOffscreenPipes();

				this.score.current.update();

				if (playerDied()) {
					this.props.dispatch({ type: "CHANGE_GAME_STATE", gameState: "player-dead" });
				}
				break;

			case "paused":
				pauseAnimations();
				break;

			case "player-dead":
				pauseAnimations();
				this.bird.current.fallToTheGround();
				break;

			default:
				break;
		}
		this.animationProp = window.requestAnimationFrame(() => this.gameLoop());
	}

	handleClick = () => {
		switch (this.props.game.state) {
			case "playing":
				this.bird.current.jump();
				break;

			case "before-game":
				this.bird.current.jump();
				this.props.dispatch({ type: "CHANGE_GAME_STATE", gameState: "playing" });
				break;

			default:
				break;
		}
	};

	render() {
		const gameState = this.props.game.state;
		return (
			// <div id="App" onClick={this.handleClick}>
			// 	{
			// 		{
			// 			"title-screen": (
			// 				<>
			// 					<TitleScreen />
			// 					<GameArea />
			// 				</>
			// 			),
			// 			"before-game": (
			// 				<>
			// 					<HelpScreen />
			// 					<GameArea>
			// 						<Bird ref={this.bird} />
			// 					</GameArea>
			// 				</>
			// 			),
			// 			playing: (
			// 				<>
			// 					<PauseButton />
			// 					<GameArea>
			// 						<Bird ref={this.bird} />
			// 						<Pipes ref={this.pipes} />
			// 					</GameArea>
			// 				</>
			// 			),
			// 			paused: (
			// 				<>
			// 					<PauseButton />
			// 					<GameArea>
			// 						<Bird ref={this.bird} />
			// 						<Pipes ref={this.pipes} />
			// 					</GameArea>
			// 				</>
			// 			),
			// 			"player-dead": (
			// 				<>
			// 				<PauseButton />
			// 					<GameArea>
			// 						<Bird ref={this.bird} />
			// 						<Pipes ref={this.pipes} />
			// 					</GameArea>
			// 				</>
			// 			)
			// 		}[this.props.game.state]
			// 	}
			// 	<Land />
			// 	<Background />
			// </div>
			<div id="App" onClick={this.handleClick}>
				<TitleScreen />
				<HelpScreen />
				
				{(gameState === "playing" || gameState === "paused") && <PauseButton />}
				{(gameState === "playing" || gameState === "paused") && <Score ref={this.score}/>}
				<GameArea>
					{gameState !== "title-screen" && <Bird ref={this.bird} />}
					{gameState !== "title-screen" && <Pipes ref={this.pipes} />}
				</GameArea>
				<Land />
				<Background />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { game: state.game };
};

export default connect(mapStateToProps)(App);
