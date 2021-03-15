import './App.css';
import { Component } from 'react';
import ColorPicker from './components/ColorPicker';
import SizePicker from './components/SizePicker';
import Reset from './components/Reset';
import Result from './components/Result';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            color: 'rgb(0, 255, 255)',
            fontSize: 8,
        }
    }

    toActiveColor = (color) => {
        this.setState({
            color : color
        })
    }

    toUpSize = (size) => {
        this.setState({
            fontSize: size
        })
    }
    toDownSize = (size) => {
        this.setState({
            fontSize: size
        })
    }
    toReset = (param) => {
        if (param == true){
            this.setState({
                color: 'rgb(0, 255, 255)',
                fontSize: 8,
            })
        }
    }

    render() {
        const {color, fontSize} = this.state;
        return(
            <div>
                <header className="header">
                <div className="grid">
                    <div className="header-text">Setting Color</div>
                </div>
                </header>
                <div className="container">
                <div className="grid">
                    <div className="container__setting-pane">
                        <ColorPicker
                            color={color}
                            toActiveColor={this.toActiveColor}
                        ></ColorPicker>
                    <div className="container__size-picker">
                        <SizePicker
                            fontSize= {fontSize}
                            toUpSize = {this.toUpSize}
                            toDownSize = {this.toDownSize}
                        ></SizePicker>
                        <Reset
                            toReset = {this.toReset}
                        ></Reset>
                    </div>
                    </div>
                    <Result
                        color={color}
                        fontSize={fontSize}
                    ></Result>
                </div>
                </div>
            </div>
        )


    }
}

export default App;