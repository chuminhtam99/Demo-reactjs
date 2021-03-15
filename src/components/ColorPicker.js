
import { Component } from 'react';

class ColorPicker extends Component{
  constructor(props){
    super(props);
    this.state = {
      colorList : ['rgb(0, 255, 255)', 'rgb(160, 53, 76)', 'rgb(247, 136, 9)', 'rgb(248, 3, 126)']
    }
  }

  toShowColor(color){
    return {backgroundColor: color}
  }

  colorClickHandle = (color) => {
    this.props.toActiveColor(color)
  }





  render(){
    var {colorList} = this.state;
    const element = colorList.map(( color, index) => {
      var result;
      if (color){
        result = 
        <div 
          key = {index} 
          className= {this.props.color === color ? "container__color-picker--item has-outline" : 'container__color-picker--item'} 
          style={this.toShowColor(color)}
          onClick={() => this.colorClickHandle(color)}
        
        
        ></div>
      } 
      return result;
    })
    return(
      <div className="container__color-picker">
        <div className="container__color-picker--header"> Color Picker</div>
        <div className="container__color-picker--body"> 
          {element}
        </div>
      </div>
    )

  }
}

export default ColorPicker;
