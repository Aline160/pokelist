import {useState,useEffect, Fragment} from 'react'
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import Routers from './components/Routers';
import Loading from './components/layout/Loading';
import {Card,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  var a
  const [pokemons,setPokemons]=useState([])
  const [currentPageUrl,SetCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);


   async function getPokemons(){
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=40",{}).then(response=>{setPokemons(response.data.results)})
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
    setLoading(true)
    getPokemons(currentPageUrl).then(res=>{
    setLoading(false)
    setNextUrl(currentPageUrl.next);
    setPrevUrl(currentPageUrl.previous);
    loadPokemon(currentPageUrl.results);

  })

}, [currentPageUrl]);

const next = async () => {
  setLoading(true);
  let data = await getPokemons(nextUrl);
  await loadPokemon(data.results);
  setNextUrl(data.next);
  setPrevUrl(data.previous);
  setLoading(false);
}

const prev = async () => {
  if (!prevUrl) return;
  setLoading(true);
  let data = await getPokemons(prevUrl);
  await loadPokemon(data.results);
  setNextUrl(data.next);
  setPrevUrl(data.previous);
  setLoading(false);
}

const loadPokemon = async (data) => {
  let getInformation = await Promise.all(data.map(async pokemon => {
    let pokemonRecord = await getPokemons(currentPageUrl)
    return pokemonRecord
  }))
  pokemons(getInformation);
}

if (loading) return "Aguarde um Pouco"



  function catpurar(){

  }

  return (
    <div className="App">

      <Navbar ></Navbar>
      <Routers></Routers>
      <div className="main">

      <div className="pokeslist">
        {pokemons.map((poke,index)=>
      

      <Card className="card" >
      <Card.Img variant="top" id="imga" src={imgPokemon(index+1)} />
      <Card.Body className="cardBody" >
      <Card.Title>{poke.name}</Card.Title>
      <Card.Text>
          
        </Card.Text>
        <Button  id="buttonCath" variant="primary"></Button>
      </Card.Body>
     </Card>
    )}

      <div className="btn">
        <button onClick={prev}>Anterior</button>
        <button onClick={next}>Próximo</button>
      </div>
    </div>
</div>
   
    
  </div>
  
);
}

export default App;
  