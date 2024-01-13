import React from "react";

function ScoreBoard({ scoreCount, bestScore }) {
  return (
    <div>
      <p className="score-count">Score: {scoreCount}</p>
      <p className="bestScore">Best Score: {bestScore}</p>
      <h2>
        {scoreCount} / {bestScore}
      </h2>
    </div>
  );
}

export default ScoreBoard;
