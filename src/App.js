import {useState,useEffect} from 'react'
import './App.css';
import axios from 'axios'

function App() {
  //const [page,setPage] = useState(1118)
  const [pokemons,setPokemons]=useState([])
  const [myPokemons,setMyPokemons]=useState([])
  axios.get("https://pokeapi.co/api/v2/pokemon",{}).then(response=>{setPokemons(Object.values(response.data.results))})
  
  
  return (
    <div className="App">
      <header className="App-header">
      
      </header>

      {pokemons.map(pokemon=><p>{pokemon.name}</p>)}

    </div>
  );
}

export default App;
