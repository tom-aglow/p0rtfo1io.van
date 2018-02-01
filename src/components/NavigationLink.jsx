import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    const {backgroundImage} = this.state;

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