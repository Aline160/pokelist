import {useState,useEffect, Fragment} from 'react'
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import Routers from './components/Routers';
import Loading from './components/layout/Loading';
import {Card,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'react-bootstrap-4-pagination';




function App() {
  var a
  const [pokemons,setPokemons]=useState([])
  const [currentPageUrl,SetCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPageNow,setCurrentPageNow]=useState(0)

  const[pagina,setPagina]=useState(0)


   async function getPokemons(currentPageNow){
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${currentPageNow}&limit=20`,{}).then(response=>{setPokemons(response.data.results)})
}

 

  function imgPokemon(number){
  const img =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`
  return img
}

useEffect(() => {
  
    getPokemons(currentPageNow)

}, [getPokemons]);



let paginationConfig = {
  totalPages: 1118,
  currentPage:pagina,
  showMax: 20,
  size: "md",
  threeDots: true,
  prevNext: true,
  previrus:true,
  onClick:  async function (page) {
    if(page==1){
      page=0
    }
    setPagina(page)
    setCurrentPageNow(page*20)
   
    

    
     
   }
};



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
<Pagination {...paginationConfig} />

    </div>
</div>
   
    
  </div>
  
);
        }

export default App;
