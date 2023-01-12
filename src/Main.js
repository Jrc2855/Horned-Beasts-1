import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
import data from './data.json'
import './Main.css'
import SelectedBeast from './SelectedBeast'

export default class Main extends Component {

  constructor(props){
    super(props);
      this.state = {
        showModal:false,
      }
  }

handleOpenModal = () => {
  this.setState({
    showModal:true,
  });
}

handleCloseModal = () => {
  this.setState({
    showModal: false
  })
}

  render() {
    return (
      <div>
        <h3>Hello Beasts</h3>
        <p>John</p>
        <main>
         {data.map((beastObj) => {
           return <HornedBeast title={beastObj.title} imageURL={beastObj.image_url} alt={beastObj.keyword} description={beastObj.description} handleOpenModal={this.handleOpenModal}/>
         })}
          </main>  
          <SelectedBeast Show={this.state.showModal} handleClose={this.handleCloseModal}/>
        </div>
    )
  }
}
