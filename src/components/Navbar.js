import {  Link } from 'react-router-dom';
import './NavBar.css'

function Navbar() {
    return (
      <div>
        <Link to="/">Home </Link>
        <Link to="/mypokes"> My Pokemons</Link>
        <Link to="/pokedex"> Pokedex </Link>
      </div>
    );
  };

  export default Navbar;