import {useState,useEffect, Fragment} from 'react'
import './App.css';
import axios from 'axios'
import Navbar from './components/Navbar'
import Routers from './components/Routers'





import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //const [page,setPage] = useState(1118)
  const [pokemons,setPokemons]=useState([])
  const [myPokemons,setMyPokemons]=useState([])
  const [value,setValue]=useState([])
  const [dados,setDados]= useState([])
   async function getPokemons(){
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=10",{}).then(response=>{setPokemons(response.data.results)})
 
  
}

async function  getInformation(nome){
 
 const poke=await axios.get(`https://pokeapi.co/api/v2/pokemon/${nome}`,{})

return poke;
}

function imgPokemon(number){
  const img =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`
  return img
}

useEffect(() => {
  getPokemons()

}, []);




  function catpurar(){
   

  }
  
  return (
   
    <div className="App">
      <header className="App-header">
        <title>My PokeList</title>
      </header>


      {pokemons.map((poke,index)=>
      
        <div className="card">
          <p>{poke.name}</p>
          <p>{console.log(getInformation(poke.name).then(a=>{return a.data.sprites}))}</p>
        <img id="imga"  src={imgPokemon(index+1)}/>
        
        </div>
      )}

      <Navbar ></Navbar>
      <Routers></Routers>
      
    </div>
    
  );
}

export default App;
