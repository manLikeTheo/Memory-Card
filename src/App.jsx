import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./Components/HomePage";
import MainBoard from "./Components/MainBoard";
import fetchData from "./Components/FetchData";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [gameLevels, setGameLevels] = useState([]);
  const [characters, setCharacters] = useState([]);
  // const [cardsSelected, setCardsSelected] = useState([]);
  // const [firstPick, setFirstPick] = useState(null);
  // const [secondPick, setSecondPick] = useState(null);
  // const [gameProgress, setGameProgress] = useState("");
  const [highestScore, setHighestScore] = useState(0);
  const [turns, setTurns] = useState(0);

  useEffect(() => {
    fetchData("https://thronesapi.com/api/v2/Characters", (data) => {
      const characterData = data.splice(0, 10);
      // const shuffledCharacters = shuffle(characterData);
      setCharacters(shuffle(characterData));
      // console.log(characters);
    });
  }, []);

  const shuffle = (array) => {
    if (array.length > 0) {
      return array.sort(() => Math.random() - 0.5);
    }
  };

  // Function to start game and switch to the Game Board
  const startGame = () => {
    setGameLevels([1, 2, 3]);
    setCurrentPage("game");
  };

  return (
    <>
      {currentPage === "home" ? (
        <HomePage setGameLevels={setGameLevels} startGame={startGame} />
      ) : (
        <MainBoard
          characters={characters}
          highestScore={highestScore}
          setHighestScore={setHighestScore}
        />
      )}
    </>
  );
}

export default App;
