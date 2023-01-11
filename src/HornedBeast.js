import React, { Component } from 'react'

export default class HornedBeast extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <img src= {this.props.imageURL} alt={this.props.description}/>
      </div>
    )
  }
}
