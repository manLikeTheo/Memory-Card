import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./Components/HomePage";
import MainBoard from "./Components/MainBoard";
import CharacterCard from "./Components/CharacterCard";
import fetchData from "./Components/FetchData";

function App() {
  const [gameLevels, setGameLevels] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [cardsSelected, setCardsSelected] = useState([]);
  const [firstPick, setFirstPick] = useState(null);
  const [secondPick, setSecondPick] = useState(null);
  const [gameProgress, setGameProgress] = useState("");
  const [highestScore, setHighestScore] = useState(0);
  const [turns, setTurns] = useState(0);

  useEffect(() => {
    fetchData("https://thronesapi.com/api/v2/Characters", (data) => {
      const characterData = data.splice(0, 20);
      const shuffledCharacters = shuffle(characterData);
      setCharacters(shuffledCharacters);
      console.log(characters);
    });
  }, []);

  useEffect(() => {
    if (firstPick && secondPick) {
      if (firstPick.id === secondPick.id) {
        console.log("Match!!!");
        resetTurns();
      }
    }
  }, [firstPick, secondPick]);

  const shuffle = (array) => {
    if (array.length > 0) {
      return array.sort(() => Math.random() - 0.5);
    }
  };

  const handleChoice = (character) => {
    firstPick ? setSecondPick(character) : setFirstPick(character);
  };

  const resetTurns = () => {
    setFirstPick(null);
    setSecondPick(null);
    setTurns((prevTurn) => prevTurn + 1);
  };

  return (
    <>
      {/* <HomePage setGameLevels={setGameLevels} /> */}
      {/* {!gameLevels[0] ? (
        <HomePage setGameLevels={setGameLevels} />
      ) : (
        <CharacterCard />
      )} */}

      <div className="card-grids gap-6 grid grid-cols-5 grid-rows-2 items-center">
        {characters.length > 0 ? (
          characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              handleChoice={handleChoice}
            />
          ))
        ) : (
          <h1 className="text-5xl font-bold">Loading...</h1>
        )}
      </div>
    </>
  );
}

export default App;
