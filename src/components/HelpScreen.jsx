import React from 'react'
import { connect } from "react-redux";
import { CSSTransition } from 'react-transition-group'

function HelpScreen(props) {
	if(props.debug) console.log("HelpScreen updated");
	return (
		<CSSTransition in={props.game.state === "before-game"} classNames="help-screen" timeout={500}>
			<div className="help-screen">
				<img className="get-ready" src={require("images/get_ready.png")} alt="" />
				<img className="help" src={require("images/help.png")} alt="" />
			</div>
		</CSSTransition>
	)
}

const mapStateToProps = state => {
	return { game: state.game, debug: state.debug };
};

export default connect(mapStateToProps)(HelpScreen);