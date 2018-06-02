import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Webcam from 'react-webcam';

const cameraStyle = {
    transform: 'scaleX(-1)',
};
const cameraScreenDiv = {
    margin: 30,
}

class App extends React.Component {

    constructor() {
        super()

        this.state = {
            screenshot: ''
        }

        this.capture = () => this.setState({screenshot: this.webcam.getScreenshot()})
        this.saveInLocalStorage = () => {
            localStorage.setItem(Date.now().toString(), this.state.screenshot)
        }

        console.log(this.state)


    }

    setRef = (webcam) => {
        this.webcam = webcam;
    }

    // capture = () => {
    //     const imageSrc = this.webcam.getScreenshot();
    //
    // };

    // saveInLocalStorage = () => {localStorage.setItem('screen', this.state.screenshot)}

    render() {
        return (
            <div style={cameraScreenDiv}>
                <Webcam
                    style={cameraStyle}
                    audio={false}
                    height={350}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    width={350}
                />
                <button onClick={this.capture}>Capture photo</button>
                <div>
                    <img src={this.state.screenshot} style={cameraStyle} alt=""/>
                </div>
                <button onClick={this.saveInLocalStorage}>Save photo</button>

            </div>


        );
    }
}

export default App;
