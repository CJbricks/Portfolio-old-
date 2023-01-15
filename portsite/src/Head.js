import React from 'react';
import { useState } from 'react';
import './/Head.css';
import About from './/About.js';
import logo from './/portimages/logo.png';


export default function Header() {

        const [display, setDisplay] = useState(false);
            
        return (
            <div className='header'>
                <img
                    className="logo"
                    src={logo}
                    alt='logo'
                    height={120}
                    width={120}
                />
                <div className="head-container">
                    <h1 className="textbox" onClick={() => setDisplay(!display)}>About
                    
                    </h1>
                    <a href="https://www.bigcartel.com/" target="_blank" rel="noopener noreferrer"><h1 className="textbox">Store</h1></a>
                    <h1 className="textbox">Resume / CV</h1>
                    <p className="name-tag" >Cody Christian Web Dev / Design</p>
                </div>

                <div className="about-section">
                { display === true ? <About /> :  console.log("false") } 
                </div>

            </div>
        )
}


