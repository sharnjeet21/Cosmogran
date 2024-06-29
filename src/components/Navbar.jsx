import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
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
    { id: 1, text: 'Beginners Guide', path: 'https://rentry.co/fmhy-guides' },
    { id: 2, text: 'Glossary', path: 'https://rentry.org/The-Piracy-Glossary' },
  ];

  return (
    <div className={`fixed flex z-30 justify-between items-center h-16 max-w-[100vw] w-[calc(100vw)] px-4 text-white text-xs pr-8 ${nav ? 'shadow-md' : ''}`}>
      <div className='flex items-center'>
        <img src={logo} alt="Logo" className="h-6 rounded-full" />
        <h1 className='text-base font-normal font-Rey text-white pl-2'>Cosmogran</h1>
      </div>

      <div className='flex'>
        <ul className='hidden md:flex'>
          {navItems.map(item => (
            <li
              key={item.id}
              className={`p-4 hover:bg-transparent hover:text-cyan-500 rounded-xl m-2 cursor-pointer font-Outfit duration-300 ${selectedItem === item.id ? 'text-cyan-500' : ''}`}
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
          <a href='https://github.com/sharnjeet21/'>
            <img src={github} alt="GitHub" className="h-10 mr-3 pt-5 invert " />
          </a>
          <a href='https://discord.com/invite/9gPutjEK'>
            <img src={discord} alt="Discord" className="h-10 mr-3 pt-5 invert" />
          </a>
          <a href='https://www.reddit.com/user/No-Faithlessness4765/'>
            <img src={reddit} alt="Reddit" className="h-10 pt-5 invert" />
          </a>
        </div>
      </div>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} className="z-50" /> : <AiOutlineMenu size={20} />}
      </div>

      {nav && <div className="fixed inset-0 backdrop-filter backdrop-blur-lg z-40 h-screen" onClick={handleNav}></div>}

      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full backdrop-blur-2xl ease-in-out duration-500 z-50 border border-white rounded-lg'
            : 'ease-in-out w-[80%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <a href='/'>
          <h1 className='w-full text-3xl px-3 py-3 font-Rey bg-gradient-to-r from-violet-600 via-pink-500 to-blue-400 inline-block text-transparent bg-clip-text m-4 mb-4'>COSMOGRAN</h1>
        </a>
        {navItems.map(item => (
          <li
            key={item.id}
            className={`p-4 border-b border-gray-700 font-Outfit text-white ${selectedItem === item.id ? 'text-cyan-500' : ''}`}
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
    </div>
  );
};

export default Navbar;
