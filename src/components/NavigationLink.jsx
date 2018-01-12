import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationLink extends Component {
  state = {
    style: {}
  };

  addThumbBackground = async () => {
    const thumb = await import(`../img/thumbnails/${this.props.thumb}`);
    this.setState({style: {backgroundImage: `url(${thumb})`}});
  };

  removeThumbBackground = () => {
    this.setState({style: {}});
  };

  render() {
    return (
      <Link
        to={`/works/${this.props.link}`}
        className="thumb"
        style={this.state.style}
        onMouseEnter={this.addThumbBackground}
        onMouseLeave={this.removeThumbBackground}
      />
    )
  }
}

export default NavigationLink;