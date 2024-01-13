import React from "react";

function ScoreBoard({ scoreCount, bestScore }) {
  return (
    <div>
      <p className="score-count">Score: {scoreCount}</p>
      <p className="bestScore">Best Score: {bestScore}</p>
    </div>
  );
}

export default ScoreBoard;
