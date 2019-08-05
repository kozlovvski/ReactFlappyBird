import React from 'react'
import { connect } from "react-redux";

function Score(props) {
	if(props.debug) console.log("Score updated");
	const scoreArray = props.score.current.toString().split("");
		return (
			<div className="score">
				{scoreArray.map(scoreNumber => {
					return (
						<img src={require(`images/large-numbers/${scoreNumber}.png`)} alt="" className="score-number" />
					)
				})}
			</div>
		)
}

const mapStateToProps = state => {
	return { score: state.score, debug: state.debug };
};

export default connect(
	mapStateToProps,
	null,
	null,
	{ forwardRef: true }
)(Score);
