import './footer.css';
import React from 'react'

export default function Footer(props) {
   
    return (
        <div className="foot-box">
            <h1>{props.ighandle}</h1>
            <h1>{props.contact}</h1>
            <h1>{props.github}</h1>
            <h1>{props.site}</h1>
        </div>
    )
}
