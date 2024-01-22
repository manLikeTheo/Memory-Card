import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

function CharacterCard({ character, isFlipped, cardClickHandler }) {
  const [flip, setFlipped] = useState(false);

  useEffect(() => {
    setFlipped(true);
  }, []);

  return (
    <div
      onClick={() => {
        cardClickHandler(character);
      }}
      className={isFlipped ? `card flipped` : `card`}
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.7}
        glarePosition="bottom"
        glareBorderRadius="20px"
        className="tilt"
        glareColor="#fff"
      >
        <div className="character-card flex flex-col items-center">
          <img
            className="character-img w-64 h-64 rounded-md object-cover"
            src={character.imageUrl}
            alt="character image"
          />
          <div className="character-info">
            <p className="fullName font-bold">{character.fullName}</p>
            <p className="title font-semibold">{character.title}</p>
          </div>
        </div>
        <div className="card-back"></div>
      </Tilt>
    </div>
  );
}

export default CharacterCard;
