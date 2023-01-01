import React, { useEffect, useState } from "react";

import { HiMoon } from "react-icons/hi";

const Navbar = ({ changeMode, mode }) => {


  return (
    <nav className="flex justify-between items-center py-6 sm:px-[72px] px-6  White shadow-md w-full dark:bg-dark-blue dark:text-dark-mode-text">
      <h1 className="text-xl font-bold">Where the world?</h1>
      <button
        className={`flex items-center gap-1 text-[1.1rem] font-semibold cursor-pointer `}
        onClick={changeMode}
      >
        <HiMoon size={20} className="mb-1" />
        Dark Mode
        <span>{mode === 'dark' ? 'ON' : 'OFF'}</span>
      </button>
    </nav>
  );
};

export default Navbar;
