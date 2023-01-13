import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
import data from './data.json'
import './Main.css'
import SelectedBeast from './SelectedBeast'
import { Row, Container } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beastData: data,
    }
  }

  handleOpenModal = () => {
    this.setState({
      showModal: true,
    });
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  handleSelect = (event) => {
    let chosen = event.target.value;
    (console.log('inside handleSelect function', chosen))
    if (chosen === 'One') {
      let newChoice = data.filter((Beasts) => Beasts.horns === 1);
      this.setState({
        beastData: newChoice
      });
    } else if (chosen === 'Two') {
      let newChoice = data.filter((Beasts) => Beasts.horns === 2);
      this.setState({
        beastData: newChoice
      });
    } else if (chosen === 'Three') {
      let newChoice = data.filter((Beasts) => Beasts.horns === 3);
      this.setState({
        beastData: newChoice
      });
    } else if (chosen === 'One Hundred') {
      let newChoice = data.filter((Beasts) => Beasts.horns === 100);
      this.setState({
        beastData: newChoice
      })
    }
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h3>Hello Beasts</h3>
        <p>John</p>
        <main>
          <Form>
            <Form.Group>
              <Form.Select name="chosen" onChange={this.handleSelect}>
                <option>Open this select menu</option>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
                <option value="One Hundred">One Hundred</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </main>
        <Container>
          <Row xs={1} md={3} className="g-4">
            {this.state.beastData.map((beastObj, idx) => {
              return <HornedBeast title={beastObj.title} imageURL={beastObj.image_url} alt={beastObj.keyword} description={beastObj.description} horns={beastObj.horns} handleOpenModal={this.handleOpenModal} key={idx} />
            })}
          </Row>
        </Container>
        <SelectedBeast Show={this.state.showModal} handleClose={this.handleCloseModal} />
      </div>
    )
  }
}
