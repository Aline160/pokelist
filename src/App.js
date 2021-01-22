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
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=2",{}).then(response=>{setPokemons(Object.values(response.data.results))})
 
  
}

async function  getInformation(nome){
  
 const poke=await axios.get(`https://pokeapi.co/api/v2/pokemon/${nome}`,{}).then(p=>{
  console.log(p.data.sprites.back_default)
})
return poke

}

function img(number){
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
      {pokemons.map(poke=>
        <div>
        <p>{poke.name}</p>
       {getInformation(poke.name)}
       
        </div>
      )}

      <Navbar ></Navbar>
      <Routers></Routers>
      
    </div>
    
  );
}

export default App;
