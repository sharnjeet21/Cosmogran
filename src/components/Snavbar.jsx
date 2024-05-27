import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../assets/fmhy.ico';
import github from '../assets/github.png';
import reddit from '../assets/reddit.png';
import discord from '../assets/discord.svg';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleItemClick = (itemId) => {
    setSelectedItem(itemId);
  };

  const navItems = [
    { id: 1, text: 'Beginners Guide', path: '/guide' },
    { id: 2, text: 'Glossary', path: 'https://rentry.org/The-Piracy-Glossary' },
    { id: 5, text: 'Ecosystem', path: '/ecosys' },
  ];

  return (
    <div className={`fixed z-10 flex justify-between bg-[#1a1a1a] items-center h-16 max-w-[100vw] w-[calc(100vw)] px-4 text-white text-xs pr-8 ${nav ? 'shadow-md' : ''}`}>
      <div className='flex items-center'>
        <img src={logo} alt="Logo" className="h-6" />
        <h1 className='text-base font-normal text-white pl-2'>Cosmogran</h1>
      </div>

      <div className='flex'>
        <ul className='hidden md:flex'>
          {navItems.map(item => (
            <li
              key={item.id}
              className={`p-4 hover:bg-transparent rounded-xl m-2 cursor-pointer duration-300 ${selectedItem === item.id ? 'text-cyan-500' : ''}`}
              onClick={() => handleItemClick(item.id)}
            >
              {item.path ? (
                <Link to={item.path}>{item.text}</Link>
              ) : (
                item.text
              )}
            </li>
          ))}
        </ul>

        <div className='hidden md:flex'>
          <img src={github} alt="GitHub" className="h-10 mr-2 pt-5 invert" />
          <img src={discord} alt="Discord" className="h-10 mr-2 pt-5 invert" />
          <img src={reddit} alt="Reddit" className="h-10 pt-5 invert" />
        </div>
      </div>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} className="z-50" /> : <AiOutlineMenu size={20} />}
      </div>

      {nav && <div className="fixed inset-0 backdrop-filter backdrop-blur-lg z-40 h-screen" onClick={handleNav}></div>}

      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[80%] h-full bg-gradient-to-b from-gray-900 to-gray-800 ease-in-out duration-500 z-50 border border-white rounded-lg'
            : 'ease-in-out w-[80%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <h1 className='w-full text-3xl font-bold font-PlayfairDisplay bg-gradient-to-r from-violet-600 via-pink-500 to-blue-400 inline-block text-transparent bg-clip-text m-4 mb-4'>COSMOS</h1>
        {navItems.map(item => (
          <li
            key={item.id}
            className={`p-4 border-b border-gray-700 text-white ${selectedItem === item.id ? 'text-cyan-500' : ''}`}
            onClick={() => handleItemClick(item.id)}
          >
            {item.path ? (
              <Link to={item.path}>{item.text}</Link>
            ) : (
              item.text
            )}
          </li>
        ))}
      </ul>

      <div className='w-full h-px bg-black fixed top-16 left-0'></div>
    </div>
  );
};

export default Navbar;
