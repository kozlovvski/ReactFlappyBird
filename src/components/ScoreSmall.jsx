import React from "react";
import { connect } from "react-redux";

function ScoreSmall(props) {
	const scoreArray = props.score[props.type].toString().split("");
	if(props.debug) console.log("ScoreSmall updated");
	return (
		<div className={`score_small score_small--${props.type}`}>
			{scoreArray.map(scoreNumber => {
				return (
					<img src={require(`images/small-numbers/${scoreNumber}.png`)} alt="" className="score_small__number" />
				);
			})}
		</div>
	);
}

const mapStateToProps = state => {
	return { score: state.score, debug: state.debug };
};

export default connect(
	mapStateToProps,
	null,
	null,
	{ forwardRef: true }
)(ScoreSmall);
