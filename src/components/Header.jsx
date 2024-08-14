import React from "react";

const Header = () => {
  return (
    <header className="text-center pt-6">
      <img
        className="hidden mx-auto object-contain md:block md:w-[8rem] drop-shadow-2xl"
        src="./game-logo.png"
        alt=""
      />
      <h1 className="text-4xl font-semibold text-gray-700 mt-2 md:text-6xl pb-1">
        Tic-Tac-Toe
      </h1>
    </header>
  );
};

export default Header;
