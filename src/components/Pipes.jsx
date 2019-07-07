import React, { Component } from 'react'
import { connect } from "react-redux";
import randomBetween from 'util/randomBetween';

class Pipes extends Component {
	update() {
		const interval = this.props.pipes.interval;
		console.log(interval)
		if (interval.at === interval.to) {
			this.addPipe();
			this.props.dispatch({type: "UPDATE_PIPE_INTERVAL", at: 0});
		} else {
			this.props.dispatch({type: "UPDATE_PIPE_INTERVAL", at: interval.at + 1});
		}
	}

	addPipe() {
		const heightRange = this.props.pipes.heightRange;
		const randomHeight = randomBetween(heightRange.min, heightRange.max);

		const topPipeEnd = randomHeight;
		const bottomPipeEnd = 100 - randomHeight + this.props.pipes.clearance;
		const key = Math.random() // TODO: change this to something meaningful
 		this.props.dispatch({type: "ADD_PIPE", package: {topPipeEnd, bottomPipeEnd, key}});
	}

	render() {
		return (
			<div id="pipes">
				{this.props.pipes.list.map(pipe => {
					return (
						<div className="pipe" key={pipe.key}>
							<img src={require("images/pipe_top.png")} style={{bottom: pipe.topPipeEnd + "%"}} alt="" className="pipe-top animated"/>
							<img src={require("images/pipe_bottom.png")} style={{top: pipe.bottomPipeEnd + "%"}} alt="" className="pipe-bottom animated"/>
						</div>
					)
				})}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return { pipes: state.pipes };
};

export default connect(
	mapStateToProps,
	null,
	null,
	{ forwardRef: true }
)(Pipes);
