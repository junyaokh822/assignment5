import { useState} from'react';


function Square({value,onSquareClick}){
    return (
    <button className="square" onClick={onSquareClick}>
        {value}
    </button>
    );
}

export default function Board() {
    const [squares,setsquares] = usesState(Array(9).fill(null));

    function handleClick(i){
        const nextSquares = squares.slice();
        nextSquare[i]= "X";
        setsquares(nextSquares);
    }

    return (
    <>
    <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(0)}/>
    </div>
    <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(0)}/>
    </div>
    <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(0)}/>
    </div>
    </>
    );
}