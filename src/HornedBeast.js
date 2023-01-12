import React, { Component } from 'react'
import './HornedBeast.css'

export default class HornedBeast extends Component {
  constructor(props){
    super(props);
      this.state = {
        likes: 0,
        }
  }

handleLikes = () => {
  this.setState({
    likes: this.state.likes + 1
  });
}

  render() {
    return (
      <div>
        <section>
          <h2>{this.props.title}</h2>
          <img src= {this.props.imageURL} alt={this.props.description}/>
          <p>{this.props.description}</p>
          <p> # of ❤️: {this.state.likes} </p>
          <p onClick={this.handleLikes}>Click to Like!</p>
          <p onClick={this.props.handleOpenModal}>Click to Zoom!</p>
        </section>
      </div>
    )
  }
}
