import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderPokemon = () => {
    return this.props.pokemon.map(pokemon => {
      if (pokemon.name.includes(this.props.search)) {
        return <PokemonCard pokemon={pokemon} />
      }
    })
  }
//HOW CAN I MAKE THIS WORK?


  render() {
    // console.log(this.props.search)//Search input
    console.log(this.props)//poke array
    return (
      <Card.Group itemsPerRow={6}>
          {this.renderPokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
