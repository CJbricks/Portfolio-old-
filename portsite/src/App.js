import FilmGallery from './Film';
import About from './/About';
import Header from './/Head';
import './App.css';
import Footer from './/Footer';
import React from 'react';

export default class App extends React.Component {
 
  render(){
    return (
     <div className="App">
       <Header />
        <FilmGallery />
        <About />
        <Footer 
         ighandle="Instagram: @oreo.blizman"
         contact="CJ.christian.web@gmail.com"
         site="https://cjchristian.com"
         github="Github: CJbricks"
         /> 
    </div>
    );
  };
  }
