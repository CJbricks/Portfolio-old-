import './footer.css';
import React from 'react'
import iglogo from ".//portimages/iglogo.png";
import gitlogo from ".//portimages/gitlogo.png";

export default function Footer(props) {
   
    return (
        <div className="component">
            
            
            
        <div className="foot-box">
            <h1>{props.ighandle}</h1>
            <h1>{props.contact}</h1>
            <h1>{props.github}</h1>
            <h1>{props.site}</h1>
           
        </div>

        <div className="logo-box" >
                <a href="https://www.github.com/CJbricks" target="_blank" rel="noopener noreferrer">
                    <img 
                    className= "git-icon"
                    src={gitlogo}
                    alt="git-icon"
                    height={75}
                    width={75}
                    />
                </a>
                <a href="https://www.instagram.com/oreo.blizman/" target="_blank" rel="noopener noreferrer">
                    <img 
                    className= "icon-ig"
                    src={iglogo}
                    alt="icon-ig"
                    height={75}
                    width={75}
                    />
                </a>
        </div>
    </div>
    )
}
