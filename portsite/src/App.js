import FilmGallery from './Film';
import Header from './/Head';
import './App.css';
import Footer from './/Footer';
import React from 'react';
import iglogo from ".//portimages/iglogo.png";
import gitlogo from ".//portimages/gitlogo.png";

export default function App() {

  const igHandle = 
  
    
    <a href="https://www.instagram.com/oreo.blizman/" target="_blank" rel="noopener noreferrer">
      <img 
      className= "icon-ig"
      src={iglogo}
      alt="icon-ig"
      height={75}
      width={75}
      />
    </a>



const gitHandle = 

  <a href="https://www.github.com/CJbricks" target="_blank" rel="noopener noreferrer">
    <img 
    className= "git-icon"
    src={gitlogo}
    alt="git-icon"
    height={75}
    width={75}
    />
  </a>;
  
    return (
     <div className="App">
        <Header />
        <FilmGallery />
        <Footer 
         ighandle={igHandle}
         github={gitHandle}
         /> 
    </div>
    )
  };
