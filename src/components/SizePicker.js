
import React, { Component } from 'react';

class SizePicker extends Component{
  upSizeHandle = (size) => {
    if ( size < 40){
      size+=2;
      this.props.toUpSize(size);
    } else {
      return
    }
  }
  downSizeHandle = (size) => {
    if ( size > 0){
      size-=2;
      this.props.toDownSize(size);
    } else {
      return
    }
  }

  render(){
    var {fontSize} = this.props;
    return(
      <React.Fragment>
              <div className="container__size-picker--header">Size: {fontSize}px</div>
              <div className="container__size-picker--body">
                <button className="container__size-picker--item upsize" onClick={() => this.upSizeHandle(fontSize)}>Tăng</button>
                <button className="container__size-picker--item downsize" onClick={() => this.downSizeHandle(fontSize)}>Giảm</button>
              </div>
      </React.Fragment>
    )

  }
}

export default SizePicker;
