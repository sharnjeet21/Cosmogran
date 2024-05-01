import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/fmhy.ico';
import github from '../assets/github.png';
import reddit from '../assets/reddit.png';
import discord from '../assets/discord.svg';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Beginners Guide' },
    { id: 2, text: 'Glossary' },
    { id: 3, text: 'Guides' },
    { id: 4, text: 'Backup' },
    { id: 5, text: 'Ecosystem' },
  ];

  return (
    <div className={`fixed flex z-30 justify-between items-center h-16 max-w-[100vw] w-[calc(100vw)] px-4 text-white text-xs backdrop-blur-3xl pr-8 ${nav ? 'shadow-md' : ''}`}>
      <div className='flex items-center'>
        <img src={logo} alt="Logo" className="h-6" />
        <h1 className='text-base font-normal text-white pl-2'>CosmicOlympus</h1>
      </div>

      <div className='flex'>
      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-transparent rounded-xl m-2 cursor-pointer duration-300 hover:text-sky-400'
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Icons Container */}
        <div className='hidden md:flex'> 
        <img src={github} alt="GitHub" className="h-10 mr-2 pt-5 invert" />
        <img src={discord} alt="Discord" className="h-10 mr-2 pt-5 invert" />
        <img src={reddit} alt="Reddit" className="h-10 pt-5 invert" />
        </div>
      </div>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} className="z-50" /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Overlay for the rest of the screen */}
      {nav && <div className="fixed inset-0 bg-black opacity-50 z-40 h-screen"></div>}

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500 z-50'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold font-PlayfairDisplay bg-gradient-to-r from-violet-600 via-pink-500 to-blue-400 inline-block text-transparent bg-clip-text m-4'>COSMOS</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl w-[100%] bg-black duration-300 hover:text-black cursor-pointer border-violet-600'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
