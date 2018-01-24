import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Intro from './components/Contacts';
import Navigation from './components/Navigation';
import Work from './components/Work';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/about" component={About} />
          <Route path="/works/:slug" component={Work} />
        </Switch>
      </div>
    );
  }
}

export default App;
