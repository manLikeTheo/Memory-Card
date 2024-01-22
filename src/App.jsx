import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./Components/HomePage";
import MainBoard from "./Components/MainBoard";
import CharacterCard from "./Components/CharacterCard";
import fetchData from "./Components/FetchData";

function App() {
  const [gameLevels, setGameLevels] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [turns, setTurns] = useState(0);

  useEffect(() => {
    fetchData("https://thronesapi.com/api/v2/Characters", (data) => {
      const shuffledCharacters = shuffle(data);
      setCharacters(shuffledCharacters.splice(0, 10));
      console.log(characters);
    });
  }, []);

  const shuffle = (array) => {
    if (array.length > 0) {
      return array.sort(() => Math.random() - 0.5);
    }
  };

  function handleCharacterCardClick(id) {
    console.log(id);
  }

  return (
    <>
      {/* <HomePage setGameLevels={setGameLevels} /> */}
      {/* {!gameLevels[0] ? (
        <HomePage setGameLevels={setGameLevels} />
      ) : (
        <CharacterCard />
      )} */}

      <div className="card-grids gap-4 grid grid-cols-5 grid-rows-2 items-center">
        {characters.length > 0 ? (
          characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              cardClickHandler={handleCharacterCardClick}
            />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
}

export default App;
