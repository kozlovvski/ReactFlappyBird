import React from 'react';
import { connect } from 'react-redux'

function App() {
  return (
    <div className="App">
      <div id="land"></div>
      <div id="background"></div>
    </div>
  );
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps)(App);
