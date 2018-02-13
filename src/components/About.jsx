import React from 'react';
import moment from 'moment';

const About = () => {
  return (
    <div className="About bg">
      <div className="about-me">
        <p>hi! i’m tom.</p>
        <p>
          yes, you’ve read right. i have the engineering degree with honours in
          the space industry. and i was supposed to build rockets and launch
          them into space, but instead i’m building websites and launch them to
          the world wide web.
        </p>
        <p>
          why? i guess it would be your next question. well, i can tell there
          are some similarities between space and the web. they both are vast
          and full of danger, so your product should be well-designed in order
          to succeed its goals either it is mars mission or start-up idea.
        </p>
        <p>
          creating a rocket or a website is an endeavour that is impossible to
          accomplish without careful planning and meeting deadlines. it demands
          you to possess certain skillset and abilities. attention to details is
          one of them, because both a rocket and a website contains numerous
          little elements that you must take care of.
        </p>
        <p>
          but there is one slight difference between rocket engineering and web
          development. the last one has more space to apply your creativity. and
          i believe i have a lot that kind of thing, so i switched to creating
          creative websites a while ago. and now i’m seeking an environment
          which will allow me to contribute a unique combination of my
          creativity and technical skills in everything i participate in.
        </p>
        <p>
          to interview me, email at{' '}
          <a href="mailto: tom@ohhhh.me">tom@ohhhh.me</a>
        </p>
        <p className="quote">
          <em>“i code therefore i am”</em> - tom,{' '}
          {moment().format('MMMM Do YYYY')}
        </p>
      </div>
    </div>
  );
};

export default About;
