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

    const img0 = require('.//portimages/hammerhands.jpg');
    const img1 = require('.//portimages/copdotcom.jpg');
    const img2 = require('.//portimages/painbook.jpg');
    const img3 = require('.//portimages/sleep.jpg');
    const img4 = require('.//portimages/lasso.jpg');
    const img5 = require('.//portimages/frogDog.jpg');
    const img6 = require('.//portimages/net.jpg');
    const img7 = require('.//portimages/inyourface.jpg');
    const img8 = require('.//portimages/gallery.jpg');
    const img9 = require('.//portimages/brickd.jpg');
    const img10 = require('.//portimages/photofolder/garage.jpg');
    const img11 = require('.//portimages/stat.jpg');
 
   


    
  
    this.state = {
      index: 0,
      imgList: [img0, img1, img2, img3, img4, img5, img6, img7, img8,
         img9, img10, img11 ]
    };

  };

    onClickForward() {
      if(this.state.index + 1 === this.state.imgList.length) {
        this.setState({
          index: 0,
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
        index: 4
        })
    };

    onClickPrint() {
      this.setState({
        index: 1
      })
    }

    onClickGallery() {
      this.setState({
        index: 8
      })
    }

    onClickWeb() {
      this.setState({
        index: 11
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
            height={600}
            width={525}
            className="switch"
            onClick={this.onClickForward}
            />
        {/* <button onClick={this.onClickForward}>Next img</button> */}
          
        </div>
        <div className="category">
          <h1 className="display" onClick={this.onClickDigital}>Digital Media</h1>
          <h1 className="display" onClick={this.onClickPrint}>Print Media</h1>
          <h1 className="display" onClick={this.onClickWeb}>Web Projects</h1>
          <h1 className="display" onClick={this.onClickGallery}>Gallery Projects</h1>

        </div>

      </div>
    )
  }
};

export default FilmGallery;