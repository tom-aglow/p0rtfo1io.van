import React, { Component } from 'react';

import Intro from './components/Intro';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <Navigation />
      </div>
    );
  }
}

export default App;
