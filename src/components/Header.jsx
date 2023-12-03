// Header.js
import React from "react";

const Header = ({ onCategoryClick }) => {
  const handleCategoryClick = (category) => {
    onCategoryClick(category);
  };
  return (
    <header className="text-gray-600 body-font pt-4">
      <div className="bg-white rounded-md w-11/12 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl font-bold">NewsPulse</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a
            className="mr-5 hover:text-gray-900 cursor-pointer"
            onClick={() => handleCategoryClick("crypto")}
          >
            Crypto
          </a>
          <a
            className="mr-5 hover:text-gray-900 cursor-pointer"
            onClick={() => handleCategoryClick("Imran Khan")}
          >
            Imran Khan
          </a>
          <a
            className="mr-5 hover:text-gray-900 cursor-pointer"
            onClick={() => handleCategoryClick("Elon Musk")}
          >
            Elon Musk
          </a>
          <a
            className="mr-5 hover:text-gray-900 cursor-pointer"
            onClick={() => handleCategoryClick("Coding")}
          >
            Coding
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
