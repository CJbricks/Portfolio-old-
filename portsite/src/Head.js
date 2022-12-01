import React from 'react';

import './/Head.css';

class Header extends React.Component {
    constructor(props){
        super(props);
    
            const logo1 = require('.//portimages/logo.png');
            const logo2 = require('.//portimages/iphonelogo.png');
            
            this.clickHeader = this.clickHeader.bind(this);
    
            this.state = {
                index: 0,
                logoList: [logo1, logo2]
            };
          };
    
    
        clickHeader() {
          if(this.state.index + 1 === this.state.logoList.length) {
              this.setState({
                  index: 0 
                 });
              } else {
                  this.setState ({
                      index: this.state.index + 1
                  });
              };
          };
    render() {
        return (
            <div className='header'>
                <img
                    className="logo"
                    src={this.state.logoList[this.state.index]}
                    onClick={this.clickHeader}
                    alt='logo'
                    height={120}
                    width={120}
                />
                <div className="head-container">
                    <h1 className="textbox">About</h1>
                    <a href="https://www.bigcartel.com/" target="_blank" rel="noopener noreferrer"><h1 className="textbox">Store</h1></a>
                    <h1 className="textbox">Resume / CV</h1>
                    <p className="name-tag" >Cody Christian Web Dev / Design</p>
                </div>

            </div>
        )
    }
}

export default Header;
