import React, { useEffect, useState } from 'react';
import GameBoard from './GameBoard';
import ScoreBoard from './ScoreBoard';

const Content = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighSore] = useState(0);

  const newHighScore = () => setHighSore(score);
  const resetScore = () => setScore(0);
  const incrementScore = () => setScore(score + 1);

  useEffect(() => (score > highScore ? newHighScore() : null), [score]);

  return (
    <div className="content">
      <ScoreBoard score={score} highScore={highScore} />
      <GameBoard resetScore={resetScore} incrementScore={incrementScore} />
    </div>
  );
};

export default Content;
