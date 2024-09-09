import React from "react";
import { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

function MainBoard({
  characters,
  setCharacters,
  highestScore,
  setHighestScore,
}) {
  const [firstPick, setFirstPick] = useState(null);
  const [secondPick, setSecondPick] = useState(null);
  const [turns, setTurns] = useState(0);
  const [gameProgress, setGameProgress] = useState("");

  useEffect(() => {
    if (firstPick && secondPick) {
      if (firstPick.id === secondPick.id) {
        //Update Character List when there is a match
        setCharacters((prevCharacter) => {
          return prevCharacter.map((character) =>
            character.id === firstPick.id
              ? { ...character, matched: true }
              : character
          );
        });
        resetTurns();
      } else {
        setTimeout(resetTurns, 1000);
      }
    }
  }, [firstPick, secondPick]);

  useEffect(() => {
    if (characters.every((character) => character.matched)) {
      setGameProgress("You win!");
    }
  }, [characters]);

  const handleChoice = (character) => {
    if (firstPick && firstPick.id === character.id) return;
    firstPick ? setSecondPick(character) : setFirstPick(character);
  };

  const resetTurns = () => {
    setFirstPick(null);
    setSecondPick(null);
    setTurns((prevTurns) => prevTurns + 1);
  };
  return (
    <div className="main-board bg-slate-600">
      <h1 className="text-5xl text-white font-bold text-center p-6">
        Game Board
      </h1>
      <div className="card-grids grid grid-cols-4 gap-6">
        {characters.length > 0 ? (
          characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              handleChoice={handleChoice}
            />
          ))
        ) : (
          <h1 className="text-3xl font-bold">Loading</h1>
        )}
      </div>
      <p className="text-3xl font-bold">{gameProgress}</p>
      <p className="text-3xl font-bold">HighestScore : {highestScore}</p>
      <p className="text-3xl font-bold">Turns: {turns}</p>
    </div>
  );
}

export default MainBoard;
