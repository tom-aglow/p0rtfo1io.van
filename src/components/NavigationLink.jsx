import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import works from '../db/works';

class NavigationLink extends Component {
  state = {
    image: {},
    backgroundColor: {}
  };
  
  componentDidMount() {
    this.setTileColor();
  }

  addThumbBackground = async () => {
    const thumb = await import(`../img/thumbnails/${this.props.thumb}`);
    this.setState({backgroundImage: `url(${thumb})`});
  };

  removeThumbBackground = () => {
    this.setState({backgroundImage: ''});
  };

  setTileColor = () => {
    const startColor = 235;
    const endColor = 35;
    const num = works.length;
    const currentColor = startColor - this.props.id * (startColor - endColor) / (num - 1);

    this.setState({backgroundColor: `rgb(${currentColor}, ${currentColor}, ${currentColor})`});
  };

  render() {
    const {backgroundImage, backgroundColor} = this.state;

    return (
      <Link
        to={`/works/${this.props.link}`}
        className="thumb"
        style={Object.assign({}, {backgroundImage}, {backgroundColor})}
        onMouseEnter={this.addThumbBackground}
        onMouseLeave={this.removeThumbBackground}
      />
    )
  }
}

export default NavigationLink;