import React from "react";
import { connect } from "react-redux";
import Bird from "components/Bird";

function App() {
	return (
		<div className="App">
			<Bird />
			<div id="land" />
			<div id="background" />
		</div>
	);
}

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps)(App);
