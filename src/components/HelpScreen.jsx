import React from 'react'
import { connect } from "react-redux";
import { CSSTransition } from 'react-transition-group'

function HelpScreen(props) {
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
	return { game: state.game };
};

export default connect(mapStateToProps)(HelpScreen);