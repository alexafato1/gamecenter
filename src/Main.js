import React from 'react';
import './Main.css';
import logo from './img/console.svg';
import PopularPosts from './PopularPosts.js';


function Main() {
    return (
       <div>
             <div className="header">
        <div className="container">
           
              
            <div className="header__title"><h1 >GAMER CENTER</h1></div>
        </div>
         
    </div>
      <PopularPosts/>  
       
      </div>
    )
}

export default Main;
