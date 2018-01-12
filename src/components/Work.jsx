import React, { Component } from 'react';

import works from '../db/works';

class Works extends Component {
  renderGithubLink(link) {
    if (link) {
      return <a href={link}><span className="fa fa-git" /></a>
    }
    return null;
  }

  render() {
    const {name, description, tags, url, github, images} = works.filter(
      ({ link }) => `/works/${link}` === this.props.match.url
    )[0];

    const preview = require(`../img/works/${images[0]}`);

    return (
      <div className="Work">
        <div className="col-left">
          <h1>{name}</h1>
          <div className="links">
            <a href={url}><span className="fa fa-external-link" /></a>
            {this.renderGithubLink(github)}
          </div>
        </div>
        <div className="col-right">
          <p className="description">{description}</p>
          <p className="tags">{tags.map(tag => `#${tag}`).join(' ')}</p>
          <img className="preview" src={preview} alt=""/>
        </div>

      </div>
    );
  }
}

export default Works;
