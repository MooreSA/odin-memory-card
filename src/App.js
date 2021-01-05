import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ScoreBoard from './components/ScoreBoard';
import GameBoard from './components/GameBoard';

const App = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighSore] = useState(0);

  const newHighScore = () => setHighSore(score);
  const resetScore = () => setScore(0);
  const incrementScore = () => setScore(score + 1);

  // check high score
  useEffect(() => (score > highScore ? newHighScore() : null), [score]);

  return (
    <div>
      <Header />
      <ScoreBoard score={score} highScore={highScore} />
      <GameBoard resetScore={resetScore} incrementScore={incrementScore} />
    </div>
  );
};

export default App;
