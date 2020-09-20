import React from 'react';
import './Main.css';
import logo from './img/console.svg';
import PopularPosts from './PopularPosts.js';


function Main() {
    return (
       <div>
             <div className="header">
        <div className="container">
            <div className="header__nav">
                <div className="header__logo"><img src={logo} alt="logo" /></div>
                <ul className="header__menu">
                    <li className=""><a href="img" >НОВОСТИ</a></li>
                    <li className=""><a href="img">ИГРЫ 1980х</a></li>
                    <li className=""><a href="img" >ИГРЫ 1990х</a></li>
                    <li className=""><a href="img" >ИГРЫ 2000х</a></li>
                    <li className=""><a href="img" >Вход</a></li>
                </ul>
                <button className="button-menu" >МЕНЮ</button>
                <div className='header__menu-popup'>
                   
                    <li className=""><a href="img" >НОВОСТИ</a></li>
                    <li className=""><a href="img">ИГРЫ 1980х</a></li>
                    <li className=""><a href="img" >ИГРЫ 1990х</a></li>
                    <li className=""><a href="img" >ИГРЫ 2000х</a></li>
                    <li className=""><a href="img" >Вход</a></li>
                </div>
            </div>
            <div className="header__title"><h1 >RETRO GAMER CAFE</h1></div>
        </div>
         
    </div>
      <PopularPosts/>  
       
      </div>
    )
}

export default Main;
