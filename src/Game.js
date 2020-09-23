import React,{useState, useEffect, useRef} from 'react';
import { Link} from 'react-router-dom';
import './Game.css';
import {db, auth} from './firebase';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



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

   const [index, setIndex] = useState(0);
    


    

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

                     
                     <div className='carousel' > 
                     
                     <img src={year.img[index]} alt='img'></img>
                     { 
                     index === year.img.length-1 ? 

                     <button className='prev' onClick={() => setIndex(index - 1) }>PREV</button>:
                     <button className='next' onClick={() => setIndex(index + 1) }>NEXT</button>
                     }
                   
                     
                     </div>
                  

                     {year.text}
                     </p>
                      ))}

                    </div>
                
                   </div>

            </div>
           
        </div>
    )
}

export default Game
