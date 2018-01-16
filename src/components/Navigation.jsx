import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import works from '../db/works';
import NavigationLink from './NavigationLink';

class Navigation extends Component {
  renderBackToHomeLink() {
    switch (this.props.location.pathname) {
      case '/':
        return;
      case '/about':
        return <Link to="/"><span className="fa fa-times back-to-home black" /></Link>;
      default:
        return <Link to="/"><span className="fa fa-times back-to-home" /></Link>
    }
  }

  render() {
    const links = works.map((work, index) => (
      <NavigationLink key={index} {...work} id={index}/>
    ));
    return (
      <nav>
        <ul className="thumbs">{links}</ul>
        {this.renderBackToHomeLink()}
      </nav>
    );
  }
}

export default withRouter(Navigation);
