import React from "react";
import logo from "../assets/images/logoPNG.png";
import bg from "../assets/images/bg.png";
import winterHS from "../assets/images/winterHS.png";
// import winterLogo from "../assets/images/winterLogo.png";
import winterview from "../assets/images/winterview.jpg";

function HomePage({ setGameLevels }) {
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
          onClick={() => setGameLevels([5, 3])}
          className="beginner bg-slate-300 p-4 text-slate-900 text-xl hover:scale-95 font-bold rounded"
        >
          Beginner
        </button>
        <button
          onClick={() => setGameLevels([7, 4])}
          className="experienced bg-slate-300 p-4 text-slate-900 text-xl hover:scale-95 font-bold rounded"
        >
          Experienced
        </button>
        <button
          onClick={() => setGameLevels([10, 5])}
          className="legend bg-slate-300 p-4 text-slate-900 text-xl hover:scale-95 font-bold rounded"
        >
          Legend
        </button>
      </div>
    </div>
  );
}

export default HomePage;
