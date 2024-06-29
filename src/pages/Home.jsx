import React from 'react';
import Navbar from '../components/Navbar';
import cosmos from '../assets/cosmos.gif';
import logo2 from '../assets/logo2.png'
import HomeCard from '../components/HomeCard';
import HomeButton from '../components/HomeButton';
import movie from '../assets/movie.svg';
// Add additional image imports if needed
import music from '../assets/music.svg'; // Example for music
import games from '../assets/game.svg'; // Example for games
import books from '../assets/book.svg'; // Example for books

const cardData = [
  {
    key: 0,
    title: 'Movies/Shows',
    desc: 'Stream,Download your favourite movies and shows from best website in one click',
    img: movie,
    path: '/videopiracyguide'
  },
  {
    key: 1,
    title: 'Music/Podcasts',
    desc: 'Stream,Download your favourite music and podcasts from best website in one click',
    img: music,
    path: '/audiopiracyguide'
  },
  {
    key: 2,
    title: 'Emulation/Games',
    desc: 'Download and Torrent your favourite games from best website in one click',
    img: games,
    path: '/gamingpiracyguide'
  },
  {
    key: 3,
    title: 'Books/Comics',
    desc: 'Read,Listen,Download your favourite books and comics from best website in one click',
    img: books,
    path: '/readingpiracyguide'
  }
];

const buttonData = [
  {
    key: 0,
    title: 'Browse Collection',
    path: '/adblockvpnguide'
  },
  {
    key: 1,
    title: 'Posts',
    path: '/post'
  },
  {
    key: 2,
    title: 'Discord',
    path: 'https://discord.com/invite/9gPutjEK'
  }
];

function Home() {
  return (
    <div>
      <Navbar />
      <img src={cosmos} alt="Logo" className='fixed z-20 w-[calc(120vw)] h-[calc(100vh)]' />
      <div className='relative pl-6 md:pl-28 md:pr-28 pt-20'> 
        <div className="absolute text-white z-20 opacity-70 backdrop-blur-20 mt-14 md:mt-28">
          <p className="text-6xl bg-gradient-to-r from-violet-600 via-pink-500 to-blue-400 inline-block text-transparent bg-clip-text uppercase font-Rey">Cosmogran</p>
          <p className='text-3xl font-semibold mt-3 font-Outfit'>Your Gateway To Tailored Excellence...</p>
          <p className='text-2xl font-medium font-Outfit'>The most comprehensive collection of free resources in the cosmos!!</p>
        </div>

        <div className="flex flex-wrap grid-flow-row gap-4">
          {buttonData.map((data) => (
            <HomeButton key={data.key} data={data} />
          ))}
        </div>

        <div className="flex flex-wrap mt-4">
          {cardData.map((data) => (
            <HomeCard key={data.key} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
