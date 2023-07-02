import React, { useState } from "react";
import Board from "./component/Board";
import { calculateWinner } from "./winner";
import "./style.scss";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(false);

  const winnerInfo = calculateWinner(squares);
  const nextPlayer = isNext ? "X" : "O";

  const statusMessage = winnerInfo.winner
    ? `Winner is ${winnerInfo.winner}`
    : `Next player: ${nextPlayer}`;

  const handleSquareClick = (clickedPosition) => {
    if (winnerInfo.winner || squares[clickedPosition]) {
      return; // Return early if there's a winner or the square is already filled.
    }
    setSquares((currentSquares) => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isNext ? "X" : "O";
        }
        return squareValue;
      });
    });
    setIsNext((currentIsNext) => !currentIsNext);
  };

  return (
    <div className="app">
      <h2>{statusMessage}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
