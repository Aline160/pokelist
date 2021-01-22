import {  Route, Switch } from 'react-router-dom';

import Mypokes from '../pages/Mypokes';
import Pokedex from '../pages/Pokedex';
import  Home from '../App';


function Routers(){
    return(
        <Switch>
        <Route path="/mypokes" component={Mypokes} />
        <Route path="/pokedex" component={Pokedex} />
        
        </Switch>


    )
}

export default Routers;