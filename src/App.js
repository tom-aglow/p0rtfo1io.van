import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Intro from './components/Intro';
import Navigation from './components/Navigation';
import Work from './components/Work';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route path="/works/:slug" component={Work} />
        </Switch>
      </div>
    );
  }
}

export default App;
