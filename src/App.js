import React, { Component } from "react";
import { connect } from "react-redux";
import Bird from "components/Bird";
import PauseButton from "components/PauseButton";

class App extends Component {
	constructor(props) {
		super(props);



		this.bird = React.createRef();
	}

	componentDidMount() {
		this.animatedElements = [
			document.getElementById("bird"),
			document.getElementById("land"),
			document.getElementById("background")
		];

    this.animationProp = window.requestAnimationFrame(() => this.gameLoop());
	}

	gameLoop() {
		this.props.game.isPaused ? this.pauseAnimations() : this.resumeAnimations();
		this.bird.current.update();
		this.animationProp = window.requestAnimationFrame(() => this.gameLoop());
	}

	pauseAnimations() {
		this.animatedElements.forEach(elem => (elem.style.animationPlayState = "paused"));
	}

	resumeAnimations() {
		this.animatedElements.forEach(elem => (elem.style.animationPlayState = "running"));
  }
  
  handleClick = () => {
    this.bird.current.jump();
  }

	render() {
		return (
			<div id="App" onClick={this.handleClick}>
				<PauseButton />
				<div id="game-area">
					<Bird ref={this.bird} />
				</div>
				<div id="land" />
				<div id="background" />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { game: state.game };
};

export default connect(mapStateToProps)(App);
