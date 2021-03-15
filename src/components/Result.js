
import React, { Component } from 'react';

class Result extends Component{
  getResult(color, fontSize){
    return {color : color, fontSize: fontSize}
  }
  render(){
    var {color, fontSize} = this.props;
    var showedColor;
    switch(color) {
      case 'rgb(0, 255, 255)':
          showedColor = 'Cyan'
        break;
      case 'rgb(160, 53, 76)':
          showedColor = 'Violet'
        break;
      case 'rgb(247, 136, 9)':
          showedColor = 'Orange'
        break;
      case 'rgb(248, 3, 126)':
          showedColor = 'Pink'
        break;
      
      default:
        // code block
    }
    return(
      <div className="container__result-pane">
        <div className="container__result-text">
          <span className="color-result">Color: {showedColor}</span>
          <span className="size-result"> - Font-size: {fontSize}px</span>
        </div>
        <div className="container__result">
          <input className="container__result-input" type="text" style={this.getResult(color, fontSize)} />
        </div>
      </div>
    )

  }
}

export default Result;
