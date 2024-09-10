import React from "react";
import { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import ScoreBoard from "./ScoreBoard";
import Modal from "./Modal";

function MainBoard({ characters, highestScore, setHighestScore }) {
  const [shuffledCharacters, setShuffledCharacters] = useState([]);
  const [firstPick, setFirstPick] = useState(null);
  const [secondPick, setSecondPick] = useState(null);
  const [turns, setTurns] = useState(0);
  const [gameProgress, setGameProgress] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  //Shuffle Cards when the game starts
  useEffect(() => {
    setShuffledCharacters(shuffle(characters));
  }, [characters]);

  useEffect(() => {
    if (firstPick && secondPick) {
      if (firstPick.id === secondPick.id) {
        //Update Character List when there is a match
        setShuffledCharacters((prevCharacters) => {
          return prevCharacters.map((character) =>
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
      setGameOver(true); //End game when all cards are matched
    }
  }, [shuffledCharacters]);

  const handleChoice = (character) => {
    if (gameOver) return;

    if (firstPick && firstPick.id === character.id) {
      //of same card is clicked twice, end the game
      setGameProgress("Game Over! You choose the same card twice.");
      setGameOver(true); //activate game over state
      setModalMessage("Game Over! You choose the same card twice.");
      setShowModal(true);
      return;
    }
    firstPick ? setSecondPick(character) : setFirstPick(character);
    //Reshuffle the cards after each card click
    setShuffledCharacters((prevCharacters) => shuffle([...prevCharacters]));
  };

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  const resetTurns = () => {
    setFirstPick(null);
    setSecondPick(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  const handleHideModal = () => {
    setShowModal(false);
    resetTurns();
  };
  return (
    <div className="main-board flex flex-col justify-center items-center bg-slate-600">
      <h1 className="text-5xl text-white font-bold text-center p-6">
        Game Board
      </h1>
      <Modal show={showModal} message={modalMessage} onHide={handleHideModal} />
      {/* <h2 className="text-3xl font-bold">{gameProgress}</h2> */}
      <ScoreBoard
        scoreCount={turns}
        bestScore={highestScore}
        // setHighestScore={setHighestScore}
      />
      <div className="card-grids grid grid-cols-5 gap-6">
        {shuffledCharacters.length > 0 ? (
          shuffledCharacters.map((character) => (
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
      {/* <p className="text-3xl font-bold">{gameProgress}</p>
    <p className="text-3xl font-bold">HighestScore : {highestScore}</p>
      <p className="text-3xl font-bold">Turns: {turns}</p> */}
    </div>
  );
}

export default MainBoard;
