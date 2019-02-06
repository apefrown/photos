import React, { Component } from "react";
import { Link } from "react-router-dom";

class Photo extends Component {
  constructor() {
    super();
    this.state = {
      photos: null
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/photos?_limit=30")
      .then(response => response.json())
      .then(photos => this.setState({ photos: photos }));
  }

  render() {
    return (
      this.state.photos &&
      this.state.photos.map(photo => (
        <Link
          to={`/photos/${photo.id}`}
          key={photo.id}
        >
          <img src={photo.url} alt={photo.title} />
        </Link>
      ))
    );
  }
}

export default Photo;
