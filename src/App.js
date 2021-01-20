import logo from './logo.svg';
import {useState,useEffect} from 'react'
import './App.css';
import axios from 'axios'

function App() {
  
  const [pokemons,setPokemons]=useState([])
  const [myPokemons,setMyPokemons]=useState([])
  axios.get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",{}).then(response=>{setPokemons(Object.values(response.data.results))})
  return (
    <div className="App">
      <header className="App-header">
      
      </header>

      {pokemons.map(pokemon=><p>{pokemon.name}</p>)}

    </div>
  );
}

export default App;
