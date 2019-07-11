import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from "react-redux";
class HelpScreen extends Component {
	render() {
		return (
			<CSSTransition in={this.props.game.state === "before-game"} classNames="help-screen" timeout={500}>
				<div className="help-screen">
					<img className="get-ready" src={require("images/get_ready.png")} alt="" />
					<img className="help" src={require("images/help.png")} alt="" />
				</div>
			</CSSTransition>
		)
	}
}

const mapStateToProps = state => {
	return { game: state.game };
};

export default connect(mapStateToProps)(HelpScreen);