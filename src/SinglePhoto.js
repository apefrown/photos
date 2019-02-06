import React, { Component } from "react";

class SinglePhoto extends Component {
  constructor() {
    super();
    this.state = {
      photo: null
    };
  }

  componentDidMount() {
    const {
        match: {
          params: { id }
        }
      } = this.props;
    fetch(`http://jsonplaceholder.typicode.com/photos/${id}`)
      .then(response => response.json())
      .then(photo => this.setState({photo: photo}));
  }

  render() {
      const photo = this.state.photo;
      return (photo && <img src={photo.url} alt={photo.title} />);
  }
}

export default SinglePhoto;
