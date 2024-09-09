import React from "react";
import logo from "../assets/images/logoPNG.png";
// import winterLogo from "../assets/images/winterLogo.png";
import winterview from "../assets/images/winterview.jpg";

function HomePage({ startGame }) {
  const bungeeSpiceStyle = {
    fontFamily: `"Bungee Spice", "serif", "sans-serif"`,
  };

  return (
    <div
      className="min-h-screen min-w-full flex flex-col gap-4 items-center justify-center bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${winterview})` }}
    >
      <img className="center w-1/3 mx-auto p-2" src={logo} alt="Logo" />
      <h1
        className="font-serif text-7xl mb-4 text-center drop-shadow-lg"
        style={{ ...bungeeSpiceStyle }}
      >
        Memory Game
      </h1>
      <div className="difficulty-levels flex items-center justify-center gap-8">
        <button
          className="text-3xl font-bold text-white hover:scale-90 bg-amber-600 rounded-lg px-4 py-2"
          onClick={startGame}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}

export default HomePage;
