import { useState } from "react";
import "./App.css";
import HomePage from "./Components/HomePage";
import MainBoard from "./Components/MainBoard";

function App() {
  const [gameLevels, setGameLevels] = useState([]);
  return (
    <>
      {!gameLevels[0] ? (
        <HomePage setGameLevels={setGameLevels} />
      ) : (
        <MainBoard />
      )}
    </>
  );
}

export default App;
