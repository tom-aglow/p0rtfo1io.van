import React, { Component } from 'react';

import works from '../db/works';
import NavigationLink from './NavigationLink';

class Navigation extends Component {
  render() {
    const links = works.map((work, index) => (
      <NavigationLink key={index} {...work} id={index}/>
    ));
    return <nav className="thumbs">{links}</nav>;
  }
}

export default Navigation;
