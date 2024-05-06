import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Section from '../components/Section';

const SidebarData = [
  {
    key: 0,
    title: 'Adblocking',
    path: ''
  },
  {
    key: 1,
    title: 'Artificial Intelligence',
    path: ''
  },
  {
    key: 2,
    title: 'Movies/TV',
    path: ''
  },
  {
    key: 3,
    title: 'Music/Podcast',
    path: ''
  },
  {
    key: 4,
    title: 'Games/Emulation',
    path: ''
  },
  {
    key: 5,
    title: 'Books/Comics',
    path: ''
  },
  {
    key: 6,
    title: 'Downloading',
    path: ''
  },
  {
    key: 7,
    title: 'Torrenting',
    path: '',
  },
  {
    key: 8,
    title: 'Android/IOS',
    path: ''
  },
  {
    key: 9,
    titile: 'Linux/MacOS',
    path: ''
  },
  {
    key: 10,
    title: 'Non-English',
    path: ''
  },
  {
    key: 11,
    title: 'Miscellaneous',
    path: ''
  }
]

export default function Guide({ pageData }) {
  return (
    <div>
      <Navbar />
      <Sidebar data={SidebarData} />
      <div>
        <div className='relative bg-[#181818]  min-h-screen'>

          <div className='relative px-12 top-28 lg:pl-96 lg:top-24'>
            <span className='underline text-cyan-500 font-extrabold font-PlayfairDisplay text-3xl block lg:inline-block'>{pageData.pageTitle}</span>
            <h2 className='text-sm text-gray-400 no-underline mt-1 block'>{pageData.pageDesc}</h2>
          </div>
          <div className="my-3.5 mb-6 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10"></div>
          <div className="lg:my-24 my-28 mb-6 h-0.5  lg:ml-96 mx-12 lg:mx-24 border-t-0 bg-neutral-100 dark:bg-white/10" />
        </div>
        <Section />
      </div>

    </div>
  )
}

