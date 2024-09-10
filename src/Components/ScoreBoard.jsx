import React from "react";

function ScoreBoard({ scoreCount, bestScore }) {
  return (
    <div className="flex text-3xl text-white font-bold gap-6 p-3">
      <p className="score-count">Score: {scoreCount}</p>
      <p className="bestScore">Best Score: {bestScore}</p>
    </div>
  );
}

export default ScoreBoard;
