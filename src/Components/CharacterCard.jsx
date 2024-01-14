import React from "react";
import Tilt from "react-parallax-tilt";

function CharacterCard({ character, isFlipped, cardClickHandler }) {
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
        glareBorderRadius="25px"
        className="tilt"
        glareColor="#fff"
      >
        <div className="character-card">
          <div
            className="character-holder"
            style={{ backgroundImage: `url(${character.src})` }}
          >
            <div className="character-name">{character.name}</div>
          </div>
        </div>
        <div className="card-back"></div>
      </Tilt>
    </div>
  );
}

export default CharacterCard;
