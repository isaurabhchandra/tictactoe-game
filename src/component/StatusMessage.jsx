const StatusMessage = ({ winnerInfo, isNext, squares }) => {
  const noMoveLeft = squares.every((squareValue) => squareValue !== null);

  const nextPlayer = isNext ? "X" : "O";

  const renderStatusMessage = () => {
    if (winnerInfo.winner) {
      return (
        <>
          Winner is{" "}
          <span className={winnerInfo === "X" ? "text-orange" : "text-green"}>
            {winnerInfo.winner}
          </span>
        </>
      );
    }
    if (!winnerInfo.winner && noMoveLeft) {
      return (
        <>
          <span className="text-orange">X</span> and{" "}
          <span className="text-green">O</span> Tied
        </>
      );
    }
    if (!winnerInfo.winner && !noMoveLeft) {
      return (
        <>
          Next player is{" "}
          <span className={isNext ? "text-orange" : "text-green"}>
            {nextPlayer}
          </span>{" "}
        </>
      );
    }
    return null;
  };

  return <div className="status-message">{renderStatusMessage()}</div>;
};

export default StatusMessage;
