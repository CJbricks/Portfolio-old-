import './footer.css';
import React from 'react'



export default function Footer(props) {

    
   
    return (
        <div className="component"> 
            <div className="foot-box">
                {props.ighandle}
                {props.github} 
            </div>
        </div>
    )
}
