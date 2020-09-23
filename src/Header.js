import React, {useState} from 'react'
import './Main.css';
import logo from './img/console.svg';

import { Link } from "react-router-dom";
function Header() {

    const [menu, setMenu] = useState(false);
    
    
    const handleDropdownClick = (e) =>{
        setMenu(!menu)
    }

    return (
        <div>
               <div className="header__nav">
                <div className="header__logo">
                    <Link to="/">
                    <img src={logo} alt="logo" />
                    </Link>
                    </div>
                <ul className="header__menu">
                    <Link to="/news">
                    <li className="">НОВОСТИ</li>
                    </Link>
                    <Link to="/game">
                    <li className="">ИГРЫ 1980х</li>
                    </Link>
                    <Link to="/game">
                    <li className="">ИГРЫ 1990х</li>
                    </Link>
                    <Link to="/game">
                    <li className="">ИГРЫ 1990х</li>
                    </Link>
                   
                    <Link to="/login">
                    <li className="">ВХОД</li>
                    </Link>
                </ul>
                <button onClick={handleDropdownClick} className="button-menu" >МЕНЮ</button>
                <div className='header__menu-popup'  style={{display: menu ? 'block' : 'none'}}>
                <ul className="open-menu">

                <Link to="/news">
                    <li className="">НОВОСТИ</li>
                    </Link>
                    <Link to="/game">
                    <li className="">ИГРЫ 1980х</li>
                    </Link>
                    <Link to="/game">
                    <li className="">ИГРЫ 1990х</li>
                    </Link>
                    <Link to="/game">
                    <li className="">ИГРЫ 1990х</li>
                    </Link>
                   
                    <Link to="/login">
                    <li className="">ВХОД</li>
                    </Link>

                </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
