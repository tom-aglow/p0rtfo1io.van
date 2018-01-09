import React from 'react';

const Intro = () => {
  return (
    <section className="intro">
      <p className="motto">i code therefore i am</p>
      <a href="mailto: tom@ohhhh.me" className="email">
        tom@ohhhh.me
      </a>
      <div className="social">
        <a href="https://github.com/tom-aglow">
          <span className="fa fa-github fa-lg" />
        </a>
        <a href="https://www.linkedin.com/in/vasilii-goriunov-19436733/">
          <span className="fa fa-linkedin fa-lg" />
        </a>
      </div>
    </section>
  );
};

export default Intro;
