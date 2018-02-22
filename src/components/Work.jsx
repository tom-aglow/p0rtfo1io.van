import React, { Component } from 'react';

import works from '../db/works';

class Works extends Component {
  componentDidUpdate() {
    const target = document.querySelector('.Work');
    target.scrollIntoView();
  }

  static renderGithubLink(link) {
    if (link) {
      return <a href={link} target="_blank" rel="noopener noreferrer"><span className="fa fa-git" /></a>
    }
    return null;
  }

  render() {
    const {name, description, tags, url, github, images} = works.filter(
      ({ link }) => `/works/${link}` === this.props.match.url
    )[0];

    const preview = require(`../img/works/${images[0]}`);

    return (
      <div className="Work bg">
        <div className="col-left">
          <h1>{name}</h1>
          <div className="links">
            <a href={url} target="_blank" rel="noopener noreferrer"><span className="fa fa-external-link" /></a>
            {Works.renderGithubLink(github)}
          </div>
        </div>
        <div className="col-right">
          <p className="description" dangerouslySetInnerHTML={{__html: description}} />
          <p className="tags">{tags.map(tag => `#${tag}`).join(' ')}</p>
          <a href={url} target="_blank" rel="noopener noreferrer"><img className="preview" src={preview} alt=""/></a>
        </div>

      </div>
    );
  }
}

export default Works;
