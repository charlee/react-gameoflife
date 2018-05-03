import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board';

class App extends Component {

    state = {
        interval: 250,
        isRunning: false,
    }

    runGame = () => {
        this.setState({ isRunning: true });
    }

    stopGame = () => {
        this.setState({ isRunning: false });
    }

    render() {

        const { interval, isRunning } = this.state;

        return (
            <div className="App">
                <h1>Conway's Game of Life</h1>
                <Board isRunning={isRunning} />

                <div className="controls">
                    Update every <input value={this.state.interval}/> msec
                    {isRunning ?
                        <button className="button" onClick={this.stopGame}>Stop</button> :
                        <button className="button" onClick={this.runGame}>Run</button>
                    }
                </div>
            </div>

        );
    }
}

export default App;
