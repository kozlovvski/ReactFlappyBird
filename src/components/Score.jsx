import React from 'react'
import { connect } from "react-redux";

function Score(props) {
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
	return { score: state.score };
};

export default connect(
	mapStateToProps,
	null,
	null,
	{ forwardRef: true }
)(Score);
