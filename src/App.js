import React, { Component } from 'react';
import './App.css';
import Game from './Game';

class App extends Component {

    render() {

        return (
            <div className="App">
                <h1>Conway's Game of Life</h1>
                <Game />
            </div>
        );
    }
}

export default App;
