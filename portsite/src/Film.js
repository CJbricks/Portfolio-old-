import React from 'react';
import './Film.css';





 class FilmGallery extends React.Component {
  constructor(props){
    super(props);

    this.onClickForward = this.onClickForward.bind(this);
    this.onClickBackward = this.onClickBackward.bind(this);
    this.onClickDigital = this.onClickDigital.bind(this);
    this.onClickPrint = this.onClickPrint.bind(this);
    this.onClickGallery = this.onClickGallery.bind(this);
    this.onClickWeb = this.onClickWeb.bind(this);
    

    const img0 = require('.//portimages/coverimg.png');
    const img1 = require('.//portimages/hammerhands.jpg');
    const img2 = require('.//portimages/net.jpg');
    const img3 = require('.//portimages/inyourface.jpg');
    const img4 = require('.//portimages/lefty.jpg');
    const img5 = require('.//portimages/copdotcom.jpg');
    const img6 = require('.//portimages/sleep.jpg');
    const img7 = require('.//portimages/painbook.jpg');
    const img8 = require('.//portimages/breakdownlanguages.png');
    const img9 = require('.//portimages/stat.jpg')
    const img10 = require('.//portimages/gallery.jpg');
    const img11 = require('.//portimages/brickd.jpg');
    

    
  
    this.state = {
      display: false,
      index: 0,
      imgList: [img0, img1, img2, img3, img4, img5, img6, img7, img8,
         img9, img10, img11 ]
      
    };

  };

    onClickForward() {
      if(this.state.index + 1 === this.state.imgList.length) {
        this.setState({
          index: 1,
        })
       } else {
        this.setState({
          index: this.state.index + 1
      })
    };
  };
  
    onClickBackward() {
        if(this.state.index - 1 === -1) {
          this.setState({
            index: this.state.imgList.length - 1
          })
        } else {
          this.setState({
            index: this.state.index - 1
          })
        }
    };

    onClickDigital(){
      this.setState({
        index: 1
        })
    };

    onClickPrint() {
      this.setState({
        index: 4
      })
    }

    onClickGallery() {
      this.setState({
        index: 10
      })
    }

    onClickWeb() {
      this.setState({
        index: 8,
        display: !this.state.display
      })
    }

 

   
  
  render(){
    return (
      <div className="body">

        <div className="switch-img">
          
          
          {/* <button onClick={this.onClickBackward}>Back</button> */}
            <img 
            src={this.state.imgList[this.state.index]}
            alt='switchbox'
            height={525}
            width={490}
            className="switch"
            />
        {/* <button onClick={this.onClickForward}>Next img</button> */}

         

        </div>
        <div className="category">
          <h1 className="display" onClick={this.onClickDigital}>Digital Media</h1>
          <h1 className="display" onClick={this.onClickPrint}>Print Media</h1>
          <h1 className="display" onClick={this.onClickWeb}>Web Projects</h1>
           { this.state.display === true && 
           <div className="list">
            <ul>
              <a href="https://github.com/CJbricks/TayGame" target="_blank" rel="noopener noreferrer"><li>StatSheet</li></a>
              <br />
              <a href="https://lefty.io" target="_blank" rel="noopener noreferrer"><li>Lefty Online Zine</li></a>
            </ul>
            </div>
            }
          <h1 className="display" onClick={this.onClickGallery}>Gallery Projects</h1>
          <button className="prev" onClick={this.onClickBackward}> Prev. </button>
          <button className="next" onClick={this.onClickForward}> Next </button> 
        </div>

      </div>
    )
  }
};

export default FilmGallery;