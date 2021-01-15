import React from 'react';

const ScoreBoard = (props) => {
  const { score, highScore } = props;

  return (
    <div className="scoreboard">
      <div className="scoreboard__current">
        Current Score: {score}
      </div>
      <div className="scoreboard__highscore">
        High Score: {highScore}
      </div>
    </div>
  );
};

export default ScoreBoard;
