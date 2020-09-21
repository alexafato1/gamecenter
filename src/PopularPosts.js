import React from 'react';
import './Main.css';
import { Link } from "react-router-dom";

function PopularPosts() {
    return (
        <div>
               <main className="main">
        <div className="container">
            <div className="main__title">
                <h1 className="">ПОПУЛЯРНЫЕ ПОСТЫ</h1>
            </div>
            <div className="main__news">
                <div className="news">
                    <div className="news__title">NEWS 1</div>
                    <div className="news__text">
                        Игра́ — тип осмысленной непродуктивной деятельности, где мотив лежит не в её результате, а в самом процессе. Также термин «игра» используют для обозначения набора предметов или программ, предназначенных для подобной деятельности.

                         
                    </div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/M9ISUENdtRo" frameBorder="0" allowFullScreen="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="news">
                    <div className="news__title">NEWS 2</div>
                    <div className="news__text">
                        Пикачу́ (яп. ピカチュウ Пикатю:, англ. Pikachu) — существо из серии игр,  
                    </div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/M9ISUENdtRo" frameBorder="0" allowFullScreen="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                </div>
                 </div>

        </div>
    </main>
        </div>
    )
}

export default PopularPosts
