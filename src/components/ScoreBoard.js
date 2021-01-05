import React from 'react';

const ScoreBoard = (props) => {
  const { score, highScore } = props;

  return (
    <div className="score-wrapper">
      <div>
        Current Score: {score}
      </div>
      <div>
        High Score: {highScore}
      </div>
    </div>
  );
};

export default ScoreBoard;
