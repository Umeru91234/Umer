import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white p-5 shadow-lg">
      <div className="container mx-0 text-center bottom-20">
        <h1 className="text-1xl m-5 font-bold transition-transform duration-500 ease-in-out">
          Creative Header
        </h1>
      </div>
    </header>
  );
};

export default Header;