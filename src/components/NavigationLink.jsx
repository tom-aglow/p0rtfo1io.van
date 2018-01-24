import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import works from '../db/works';

class NavigationLink extends Component {
  state = {
    image: {},
    backgroundColor: {}
  };

  addThumbBackground = async () => {
    const thumb = await import(`../img/thumbnails/${this.props.thumb}`);
    this.setState({backgroundImage: `url(${thumb})`});
  };

  removeThumbBackground = () => {
    this.setState({backgroundImage: ''});
  };

  render() {
    const {backgroundImage, backgroundColor} = this.state;

    console.log(this.props.link, backgroundColor);
    return (
      <Link
        to={`/works/${this.props.link}`}
        className={`thumb thumb-${this.props.id + 1}`}
        style={Object.assign({}, {backgroundImage})}
        onMouseEnter={this.addThumbBackground}
        onMouseLeave={this.removeThumbBackground}
      ><span className="tag">{this.props.name}</span></Link>
    )
  }
}

export default NavigationLink;