import React, { useState } from 'react';
import Card from './Card';
import imgInfo from '../images';

const GameBoard = (props) => {
  const { incrementScore, resetScore } = props;

  // there must be a better way of doing this
  const [cardsInfo, setCardsInfo] = useState(() => {
    const cardArray = [];
    for (let i = 0; i < imgInfo.length; i += 1) {
      cardArray.push({
        imgSrc: imgInfo[i].img,
        imgAlt: imgInfo[i].alt,
        clicked: false,
        cardId: `card-${imgInfo[i].alt}`,
      });
    }
    return cardArray;
  });

  // Fisher-Yates Shuffle Algorithmn
  const shuffleArray = (array) => {
    const copiedArray = array.map((item) => item);
    let currentIndex = array.length;
    let tempValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      tempValue = copiedArray[currentIndex];
      copiedArray[currentIndex] = copiedArray[randomIndex];
      copiedArray[randomIndex] = tempValue;
    }

    return copiedArray;
  };

  const shuffleCards = () => {
    setCardsInfo((prevState) => shuffleArray(prevState));
  };

  // maps the previous state onto itself with just the clicked prop changing
  const resetCards = () => {
    // holy fuck this works?
    setCardsInfo((prevCards) => prevCards.map((card) => ({ ...card, clicked: false })));
  };

  // resets everything inside this component
  const resetGameBoard = () => {
    resetCards();
    resetScore();
  };

  // sets the clicked property of the target card to clicked
  // have to use map as it will return a brand new array
  const clickCard = (cardId) => {
    setCardsInfo((cards) => cards.map((card) => {
      if (card.cardId === cardId) {
        return { ...card, clicked: true };
      }
      return card;
    }));
  };

  // checks if the card that matches cardId is clicked
  const cardClicked = (cardId) => {
    for (let i = 0; i < cardsInfo.length; i += 1) {
      if (cardsInfo[i].cardId === cardId) {
        if (cardsInfo[i].clicked) {
          return true;
        }
        return false;
      }
    }
    return null;
  };

  // handles the clicked passed up from the card component
  const handleCardClick = (event) => {
    const targetId = event.target.id;
    if (cardClicked(targetId)) {
      resetGameBoard();
      shuffleCards();
    } else {
      clickCard(targetId);
      incrementScore();
      shuffleCards();
    }
  };

  return (
    <div className="gameboard">
      {cardsInfo.map((cardData) => (
        <Card cardData={cardData} handleCardClick={handleCardClick} key={cardData.cardId} />
      ))}
    </div>
  );
};

export default GameBoard;
