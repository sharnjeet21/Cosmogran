import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import github from '../assets/github.png';
import reddit from '../assets/reddit.png';
import discord from '../assets/discord.svg';

const Navbar = ({ handleSearch }) => {
  const [nav, setNav] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchInput, setSearchInput] = useState('');

  const handleNav = () => {
    setNav(!nav);
  };

  const handleItemClick = (itemId) => {
    setSelectedItem(itemId);
  };

  const handleSearchInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
    handleSearch(inputValue); // Propagate search input change to parent component if needed
  };

  const navItems = [
    { id: 1, text: 'Beginners Guide', path: 'https://rentry.co/fmhy-guides' },
    { id: 2, text: 'Glossary', path: 'https://rentry.org/The-Piracy-Glossary' }
  ];

  return (
    <div className={`fixed z-30 flex justify-between bg-primary items-center h-16 max-w-[100vw] w-[calc(100vw)] px-4 text-secondary text-xs pr-8 ${nav ? 'shadow-md' : ''}`}>
      <div className='flex items-center'>
        <img src={logo} alt="Logo" className="h-6 rounded-full" />
        <Link to="/">
          <h1 className='text-base font-normal font-Rey text-secondary pl-2'>Cosmogran</h1>
        </Link>
      </div>

      <div className='flex justify-start mx-36 flex-1'>
        <div className="flex items-start">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 rounded-lg border bg-orange text-primary border-primary focus:outline-none focus:border-secondary hover:border-secondary placeholder-primary"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
        </div>
      </div>


      <div className='flex'>
        <ul className='hidden md:flex text-secondary font-Outfit'>
          {navItems.map(item => (
            <li
              key={item.id}
              className={`p-4 hover:bg-transparent rounded-xl m-2 cursor-pointer duration-300 hover:text-orange ${selectedItem === item.id ? 'text-orange' : ''}`}
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
          <img src={github} alt="GitHub" className="h-10 mr-2 pt-5 invert " />
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
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full backdrop-blur-2xl ease-in-out duration-500 z-50 border border-transparent rounded-lg'
            : 'ease-in-out w-[80%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <a href='/'>
          <h1 className='w-full text-3xl px-3 py-3 font-Rey bg-gradient-to-r from-orange via-orange to-yellow inline-block text-transparent bg-clip-text m-4 mb-4'>COSMOGRAN</h1>
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

      <div className='w-full h-px bg-black fixed top-16 left-0'></div>
    </div>
  );
};

export default Navbar;
