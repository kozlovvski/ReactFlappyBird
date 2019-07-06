import React, { Component } from "react";
import { connect } from "react-redux";
import Bird from "components/Bird";
import PauseButton from "components/PauseButton";
import Land from "components/Land";
import Background from "components/Background";
import TitleScreen from "components/TitleScreen";
import HelpScreen from "components/HelpScreen";
import GameArea from "components/GameArea";

class App extends Component {
	constructor(props) {
		super(props);

		this.bird = React.createRef();
	}

	componentDidMount() {
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
				this.resumeAnimations(); // in case we were in "paused" state
				this.bird.current.update();
				break;

			case "paused":
				this.pauseAnimations();
				break;

			default:
				break;
		}

		this.animationProp = window.requestAnimationFrame(() => this.gameLoop());
	}

	pauseAnimations() {
		document
			.querySelectorAll(".animated")
			.forEach(elem => (elem.style.animationPlayState = "paused"));
	}

	resumeAnimations() {
		document
			.querySelectorAll(".animated")
			.forEach(elem => (elem.style.animationPlayState = "running"));
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
		return (
			<div id="App" onClick={this.handleClick}>
				{(() => {
					switch (this.props.game.state) {
						case "title-screen":
							return (
								<React.Fragment>
									<TitleScreen />
									<GameArea />
								</React.Fragment>
							);

						case "before-game":
							return (
								<React.Fragment>
									<HelpScreen />
									<GameArea>
										<Bird ref={this.bird} />
									</GameArea>
								</React.Fragment>
							);

						case "playing":
							return (
								<React.Fragment>
									<PauseButton />
									<GameArea>
										<Bird ref={this.bird} />
									</GameArea>
								</React.Fragment>
							);

						case "paused":
							return (
								<React.Fragment>
									<PauseButton />
									<GameArea>
										<Bird ref={this.bird} />
									</GameArea>
								</React.Fragment>
							);
						default:
							break;
					}
				})()}
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
