import React from 'react'
import './Footer.css';
import logo from './img/console.svg';

function Footer() {
    return (
        <div>
              <footer className ="footer">
    
            <div className ="footer__nav">
                <div className ="footer__logo"><img src={logo} alt="logo" /></div>
                <ul className="footer__menu">
                    <li className ="footer__item"><a href="#" className="footer_link vk"></a></li>
                    <li className ="footer__item"><a href="#" className="footer_link fb"></a></li>
                    <li className ="footer__item"><a href="#" className="footer_link youtube"></a></li>
                    <li className ="footer__item"><a href="#" className="footer_link insta"></a></li>
                </ul>
            </div>
 
    </footer>
            
        </div>
    )
}

export default Footer
