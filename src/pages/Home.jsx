  // Home.js
  import React from 'react';
  import Navbar from '../components/Navbar';
  import  cosmos  from '../assets/cosmos.gif';

  function Home() {
    return (
      <div >
        <Navbar />
        <img src={cosmos} alt="Logo" className='fixed  z-20 w-[calc(120vw)] h-[calc(100vh)]'/>
        <div class="absolute text-white mx-20 mt-36 z-30 opacity-70 backdrop-blur-20">
            <p class="font-extrabold text-6xl font-PlayfairDisplay bg-gradient-to-r from-violet-600 via-pink-500 to-blue-400 inline-block text-transparent bg-clip-text">COSMOS</p>
            <p className='text-3xl font-semibold mt-3'>Your Gateway to Tailored Excellence...</p>
            <p className='text-xl font-medium'>The largest collection of free stuff on the internet!</p>
          </div>
          <div className="absolute">
          <div className="relative flex justify-center">
  <button className="z-20 relative bg-blue-200 hover:bg-blue-400 text-black font-bold py-3 px-6 rounded-full shadow-lg shadow-neutral-950 hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce mx-2 ml-20 mt-96">
    <p className='font-medium text-sm'>Browse Collection</p>
  </button>
  <button className="z-20 relative bg-blue-200 hover:bg-blue-400 text-black font-bold py-3 px-6 rounded-full shadow-lg shadow-neutral-950 hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce mx-2 mt-96">
    <p className='font-medium text-sm'>Posts</p>
  </button>
  <button className="z-20 relative bg-blue-200 hover:bg-blue-400 text-black font-bold py-3 px-6 rounded-full shadow-lg shadow-neutral-950 hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce mx-2 mt-96">
    <p className='font-medium text-sm'>Discord</p>
  </button>
</div>

          <div className='relative'>
          <div class="card m-auto text-gray-300 w-[clamp(250px,80%,300px)] h-[clamp(250px,80%,300px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-2xl overflow-hidden absolute mt-9 mb-6 ml-20 mx-10  z-20 opacity-85">
          <div class="px-8 py-10">
          <div class="bg-purple-500 w-10 h-10 rounded-full rounded-tl-none  group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-violet-900 transition-all"></div>
          <div class="mt-8 uppercase font-bold text-lg">
          Movies/TV/Anime
         </div>
         <div class="text-gray-300 uppercase tracking-widest font-semibold mb-4 text-xs mt-4">
         Stream Videos, Download Videos, Torrent Videos
        </div>
      </div>
      
    
      <div class="h-4 w-full bg-gradient-to-l via-purple-500 group-hover:blur-xl blur-2xl  rounded transition-all absolute bottom-0"></div>
      <div class="h-0.5 group-hover:w-full bg-gradient-to-l  via-violet-950 group-hover:via-violet-500 w-[70%] m-auto rounded transition-all"></div>
    </div>
    <div class="card m-auto text-gray-300 w-[clamp(250px,80%,300px)] h-[clamp(250px,80%,300px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-2xl overflow-hidden absolute mt-9 mb-6 ml-14 mx-10  z-20 opacity-85">
          <div class="px-8 py-10">
          <div class="bg-purple-500 w-10 h-10 rounded-full rounded-tl-none  group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-violet-900 transition-all"></div>
          <div class="mt-8 uppercase font-bold text-lg">
          Movies/TV/Anime
         </div>
         <div class="text-gray-300 uppercase tracking-widest font-semibold mb-4 text-xs mt-4">
         Stream Videos, Download Videos, Torrent Videos
        </div>
      </div>
      

      <div class="h-4 w-full bg-gradient-to-l via-purple-500 group-hover:blur-xl blur-2xl  rounded transition-all absolute bottom-0"></div>
      <div class="h-0.5 group-hover:w-full bg-gradient-to-l  via-violet-950 group-hover:via-violet-500 w-[70%] m-auto rounded transition-all"></div>
    </div>
    </div>
          </div>
        </div>                                                                                     
    );
  }

  export default Home;
