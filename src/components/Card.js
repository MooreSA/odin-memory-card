import React from 'react';

const Card = (props) => {
  const { cardData, handleCardClick } = props;
  const { imgSrc, imgAlt, cardId } = cardData;
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      href="#"
      onClick={handleCardClick}
      role="button"
      tabIndex="0"
      className="gameboard__card"
    >
      <img
        className="gameboard__img"
        src={imgSrc}
        alt={imgAlt}
        id={cardId}
      />
    </div>
  );
};

export default Card;
