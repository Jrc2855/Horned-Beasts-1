import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import HornedBeast from './HornedBeast'
// import data from './data.json'

export default class SelectedBeast extends Component {
  render() {
    return (
      <Modal show={this.props.Show} onHide={this.props.handleClose}>
      <p>Selected Beast</p>
      <HornedBeast />
      </Modal>
    )
  }
}
