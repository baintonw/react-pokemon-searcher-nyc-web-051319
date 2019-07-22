import React from 'react'
import PokemonIndex from './components/PokemonIndex'
import './App.css'

class App extends React.Component {



  render(){

    return(
      (
        <div className="App">
          <PokemonIndex />
          <div>
          </div>
        </div>
      )
    )
  }
}//app

export default App
