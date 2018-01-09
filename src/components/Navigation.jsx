import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import works from '../db/works';

class Navigation extends Component {
  render() {
    const links = works.map(({link}) => <Link to={link} className="thumb" />);
    return <nav className="thumbs">{links}</nav>;
  }
}

export default Navigation;
