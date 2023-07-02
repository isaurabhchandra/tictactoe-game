export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // Return an object with the winning player and the winning squares.
      return {
        winner: squares[a],
        winningSquares: lines[i], // Add the winning squares to the result.
      };
    }
  }

  // If there is no winner, return an object with null as the winner and an empty array for winning squares.
  return {
    winner: null,
    winningSquares: [],
  };
}
