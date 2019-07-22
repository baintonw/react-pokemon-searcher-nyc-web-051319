import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    search: ""
  }

  componentDidMount() {
    this.getPokemon()
  }

  addPokemon = (poke) => {
    this.setState({
      pokemon: poke
    })
  }

  getPokemon = () => {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(pokemons => {
        // let pokes = pokemons.slice(0, pokemons.length - 1)
        this.setState({
          pokemon: pokemons
        })
    })
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }


  render() {

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleChange} showNoResults={false} />
        <br />
        <PokemonCollection search={this.state.search} pokemon={this.state.pokemon} />
        <br />
        <PokemonForm addPokemon={this.addPokemon} pokemon={this.state.pokemon}/>
      </div>
    )
  }
}
// _.debounce(() => console.log('🤔'), 500)} showNoResults={false
export default PokemonPage
