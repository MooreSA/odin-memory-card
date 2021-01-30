import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
// import ScoreBoard from './components/ScoreBoard';
// import GameBoard from './components/GameBoard';
import Footer from './components/Footer';

const App = () => (
  <div className="page">
    <Header />
    <Content />
    {/* <ScoreBoard score={score} highScore={highScore} />
      <GameBoard resetScore={resetScore} incrementScore={incrementScore} /> */}
    <Footer />
  </div>
);

export default App;
