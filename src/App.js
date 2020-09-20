import React from 'react';

import './App.css';
import Main from './Main.js';
import News from './News.js';
import Game from './Game.js';
import Login from './Login.js';
import Footer from './Footer.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    
    <Router >
   
    <Switch >
      

    <Route path='/game'>
        <Game/>
     </Route>
     <Route path='/login'>
        <Login/>
     </Route>

     <Route path='/news'>
        <News/>
     </Route>
     
     <Route path='/'>
       <Main/>
       <Footer/>  
     </Route>
    
    </Switch>

</Router>
    
  );
}

export default App;
