import React from 'react';
import './Board.css';


const CELL_SIZE = 20;
const WIDTH = 800;
const HEIGHT = 600;


class Cell extends React.Component {

    render() {
        const { x, y } = this.props;
        return (
            <div className="Cell" style={{
                left: `${CELL_SIZE * x + 1}px`,
                top: `${CELL_SIZE * y + 1}px`,
                width: `${CELL_SIZE - 1}px`,
                height: `${CELL_SIZE - 1}px`,
            }} />
        );
    }
}


class Board extends React.Component {

    constructor() {
        super();
        this.rows = HEIGHT / CELL_SIZE;
        this.cols = WIDTH / CELL_SIZE;

        this.board = [];
        for (let y = 0; y < this.rows; y++) {
            this.board[y] = [];
            for (let x = 0; x < this.cols; x++) {
                this.board[y][x] = false;
            }
        }
    }

    state = {
        cells: [],
    }

    componentWillReceiveProps() {

    }

    getElementOffset() {
        const rect = this.boardRef.getBoundingClientRect();
        const doc = document.documentElement;

        return {
            x: (rect.left + window.pageXOffset) - doc.clientLeft,
            y: (rect.top + window.pageYOffset) - doc.clientTop,
        };
    }

    makeCells() {
        let cells = [];
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                if (this.board[y][x]) {
                    cells.push({ x, y });
                }
            }
        }

        return cells;
    }

    handleClick = (event) => {

        const elemOffset = this.getElementOffset();
        const offsetX = event.clientX - elemOffset.x;
        const offsetY = event.clientY - elemOffset.y;
        
        const x = Math.floor(offsetX / CELL_SIZE);
        const y = Math.floor(offsetY / CELL_SIZE);

        if (x >= 0 && x <= this.cols && y >= 0 && y <= this.rows) {
            this.board[y][x] = !this.board[y][x];
        }

        this.setState({ cells: this.makeCells() });
    }

    render() {
        const { cells } = this.state;
        return (
            <div className="Board"
                style={{ width: WIDTH, height: HEIGHT, backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`}}
                onClick={this.handleClick}
                ref={(n) => { this.boardRef = n; }}>

                {cells.map(cell => (
                    <Cell x={cell.x} y={cell.y}/>
                ))}
            </div>
        );
    }
}


export default Board;