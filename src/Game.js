import React,{useState, useEffect} from 'react';
import { Link} from 'react-router-dom';
import './Game.css';
import {db, auth} from './firebase'

function Game( {postId,decada}) {
    const [years, setYears] = useState([]);
    useEffect(() => {
        if(postId){
           db.collection('posts').doc(postId)
           .collection('years')
           .onSnapshot((snapshot) => {
            setYears(snapshot.docs.map((doc) => doc.data()));
          })
        }
    }, [])
    

    return (
        <div className='game'>
           <div className='game__collection'> 
           <ul>
                  <Link to="/">
                    <li className="game__link">Armor Attack</li>
                    </Link>
                    <Link to="/game">
                    <li className="game__link">Battlezone (игра, 1980)</li>
                    </Link>
                    <Link to="/game">
                    <li className="game__link">Computer Bismarck</li>
                    </Link>
                    <Link to="/game">
                    <li className="">Defender (игра)</li>
                    </Link>
                    <Link to="/game">
                    <li className="game__link">Eamon</li>
                    </Link>
                   
                    <Link to="/game">
                    <li className="game__link">Missile Command</li>
                    </Link>

                    <Link to="/">
                    <li className="game__link">Mission Asteroid</li>
                    </Link>
                    <Link to="/game">
                    <li className="game__link">Mystery House</li>
                    </Link>
                    <Link to="/game">
                    <li className="game__link">Pac-Man</li>
                    </Link>
                    <Link to="/game">
                    <li className="">Phoenix (игра)</li>
                    </Link>
                    <Link to="/game">
                    <li className="game__link">Rogue</li>
                    </Link>
                   
                    <Link to="/game">
                    <li className="game__link">Space Panic</li>
                    </Link>

                    <Link to="/">
                    <li className="game__link">3D Monster Maze</li>
                    </Link>
                    <Link to="/game">
                    <li className="game__link">Battlezone (игра, 1980)</li>
                    </Link>
                    <Link to="/game">
                    <li className="game__link">Computer Bismarck</li>
                    </Link>
                    <Link to="/game">
                    <li className="">Defender (игра)</li>
                    </Link>
                    <Link to="/game">
                    <li className="game__link">Eamon</li>
                    </Link>
                   
                    <Link to="/game">
                    <li className="game__link">Missile Command</li>
                    </Link>

                    <Link to="/">
                    <li className="game__link">Mission Asteroid</li>
                    </Link>
                    <Link to="/game">
                    <li className="game__link">Mystery House</li>
                    </Link>
                    <Link to="/game">
                    <li className="game__link">Pac-Man</li>
                    </Link>
                    <Link to="/game">
                    <li className="">Phoenix (игра)</li>
                    </Link>
                    <Link to="/game">
                    <li className="game__link">Rogue</li>
                    </Link>
                   
                    <Link to="/game">
                    <li className="game__link">Space Panic</li>
                    </Link>
           </ul>
           </div> 
            <div className='game__container'>
               <div className='game__decade'>

                   <h1>{decada}</h1>
                    <div className='game__years'>
                    {years.map((year) => (
                     <p>
                     <strong>{year.name}</strong> 
                    
                     {year.img.map((i) => (
                     <img src={i}></img>))}
                     {year.text}
                     </p>
                      ))}

                    </div>
                
                   </div>

            </div>
           
        </div>
    )
}

export default Game;
