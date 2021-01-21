import {useState,useEffect, Fragment} from 'react'
import './App.css';
import axios from 'axios'


function App() {
  //const [page,setPage] = useState(1118)
  const [pokemons,setPokemons]=useState([])
  const [myPokemons,setMyPokemons]=useState([])

   async function getPokemons(){
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=1118",{}).then(response=>{setPokemons(Object.values(response.data.results))})
 
  
}

useEffect(() => {
  getPokemons()

}, []);

  function catpurar(){
   

  }
  
  return (
    <div className="App">
      <header className="App-header">
      
      </header>
 {pokemons.map(poke=>
 <Fragment>
   <p>{poke.name}</p>
   <button onClick={catpurar()} >Catura</button>
</Fragment>
   )}
  

    </div>
  );
}

export default App;