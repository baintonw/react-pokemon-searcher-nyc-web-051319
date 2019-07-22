import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: '',
      clicked: false
    }
  }



  handleChange = (event) => {
    // console.log(event.target[0].value, event.target[1].value, event.target[2].value, event.target[3].value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {

      fetch('http://localhost:3000/pokemon/', {
        method: "POST",
        headers: {'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        sprites: {
          front: this.state.frontUrl,
          back: this.state.backUrl
        },
        stats: [
          {
            value: this.state.hp,
            name: 'hp'
          }
        ]
      })
    })
    .then(res=> res.json())
    .then(poke=>{
        this.props.addPokemon([poke, ...this.props.pokemon])
    })

  }


  render() {
    console.log(this.state)
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange}  />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
