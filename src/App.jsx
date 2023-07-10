import React, { useState } from "react";
import Board from "./component/Board";
import { calculateWinner } from "./winner";
import StatusMessage from "./component/StatusMessage";
import "./style.scss";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(false);

  const winnerInfo = calculateWinner(squares);
  const { winner, winningSquares } = winnerInfo; // Destructure the winner property

  const handleSquareClick = (clickedPosition) => {
    if (winner || squares[clickedPosition]) {
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
  const onNewGameStart = () => {
    setSquares(Array(9).fill(null));
  };
  return (
    <div className="app">
      <StatusMessage
        winnerInfo={winnerInfo}
        isNext={isNext}
        squares={squares}
      />
      <Board squares={squares} handleSquareClick={handleSquareClick}
      winningSquares = {winningSquares} />
   
      <button
        type="button"
        onClick={onNewGameStart}
        className={`btn-reset ${winner ? "active" : " "}`}
      >
        Start New Game
      </button>
    </div>
  );
}

export default App;
