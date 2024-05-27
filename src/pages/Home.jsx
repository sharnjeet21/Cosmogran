import React from 'react';
import Navbar from '../components/Navbar';
import cosmos from '../assets/cosmos.gif';
import HomeCard from '../components/HomeCard';
import HomeButton from '../components/HomeButton';

const cardData = [
  {
    key: 0,
    title: 'Movies/Shows',
    desc: 'Stream,Download your favourite movies and shows from best website in one click',
    path: '/movies'
  },
  {
    key: 1,
    title: 'Music/Podcasts',
    desc: 'Stream,Download your favourite muisc and podcasts from best website in one click',
    path: '/music'

  },
  {
    key: 2,
    title: 'Emulation/Games',
    desc: 'Download and Torrent your favourite games from best website in one click',
    path: '/games'

  },
  {
    key: 3,
    title: 'Books/Comics',
    desc: 'Read,Listen,Download your favourite books and comics from best website in one click',
    path: '/books'

  }
]

const buttonData = [
  {
    key: 0,
    title: 'Browse Collection',
    path: '/adblockvpnguide'
  },
  {
    key: 1,
    title: 'Posts ',
    path: '/post'
  },
  {
    key: 2,
    title: 'Discord',
    path: 'https://discord.com/invite/9gPutjEK'
  }
]

function Home() {
  return (
    <div>
      <Navbar />
      <img src={cosmos} alt="Logo" className='fixed z-20 w-[calc(120vw)] h-[calc(100vh)]' />
      <div className='pl-6 md:pl-28 md:pr-28 pt-20'> 
        <div className="absolute text-white z-20 opacity-70 backdrop-blur-20 mt-14 md:mt-28">
          <p className="font-extrabold text-6xl font-PlayfairDisplay bg-gradient-to-r from-violet-600 via-pink-500 to-blue-400 inline-block text-transparent bg-clip-text uppercase">Cosmogran</p>
          <p className='text-3xl font-semibold mt-3'>Your Gateway to Tailored Excellence...</p>
          <p className='text-xl font-medium'>The largest collection of free stuff on the internet!</p>
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
