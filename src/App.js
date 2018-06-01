import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Webcam, {getScreenshot} from 'react-webcam';

const cameraStyle = {
    transform: 'scaleX(-1)',
};
const cameraScreenDiv = {
    margin: 30,
}

class App extends React.Component {
    setRef = (webcam) => {
        this.webcam = webcam;
    }

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
    };

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


            </div>



        );
    }
}

export default App;
