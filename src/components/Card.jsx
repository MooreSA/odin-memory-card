import React from 'react';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/brands.scss';
import { useSpring, animated } from 'react-spring';

const Card = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { cardData, handleCardClick } = props;
  const {
    // eslint-disable-next-line no-unused-vars
    imgSrc, imgAlt, cardId, className,
  } = cardData;

  // Honestly. this is magic
  const calc = (x, y) => (
    [-(y - window.innerHeight / 2) / 30, (x - window.innerWidth / 2) / 30, 1.1]
  );
  const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const [spingProps, set] = useSpring(() => (
    { xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }
  ));

  return (
    <animated.div
      className="gameboard__card"
      onClick={handleCardClick}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: spingProps.xys.interpolate(trans) }}
      data-id={cardId}
    >
      <i className={` gameboard__icon ${className}`} data-id={cardId} />
    </animated.div>
  );
};

export default Card;
