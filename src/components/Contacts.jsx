import React from 'react';
import { Link } from 'react-router-dom';

const Contacts = () => {
  return (
    <div className="Contacts">
      <a href="mailto: tom@ohhhh.me" className="email">tom@ohhhh.me</a>
      <div className="social">
        <a href="https://github.com/tom-aglow">
          <span className="fa fa-github fa-lg" />
        </a>
        <a href="https://www.linkedin.com/in/vasilii-goriunov-19436733/">
          <span className="fa fa-linkedin fa-lg" />
        </a>
      </div>
      <Link to="/about" className="about">about.me</Link>
    </div>
  );
};

export default Contacts;
