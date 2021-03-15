
import React, { Component } from 'react';

class Reset extends Component{
  resetHandle = () => {
    this.props.toReset(true)
  }
  render(){
    return(
      <React.Fragment>
        <div className="container__reset-button">
          <button onClick={this.resetHandle}>Reset</button>
        </div>
      </React.Fragment>
    )

  }
}

export default Reset;
