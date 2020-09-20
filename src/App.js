import React from 'react';

import './App.css';
import Header from './Header.js';
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
       <Header/>
        <Game/>
        <Footer/> 
     </Route>

     <Route path='/login'>
     <Header/>
        <Login/>
        <Footer/> 
     </Route>

     <Route path='/news'>
     <Header/>
        <News/>
     </Route>
     
     <Route path='/'>
       <Header/>
       <Main/>
       <Footer/>  
     </Route>
    
    </Switch>

</Router>
    
  );
}

export default App;
