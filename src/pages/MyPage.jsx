import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import MySection from '../components/MySection';

const SidebarData = [
  { key: 0, title: 'Adblocking', path: '/' },
  { key: 1, title: 'Artificial Intelligence', path: '' },
  { key: 2, title: 'Movies/TV', path: '' },
  { key: 3, title: 'Music/Podcast', path: '' },
  { key: 4, title: 'Games/Emulation', path: '' },
  { key: 5, title: 'Books/Comics', path: '' },
  { key: 6, title: 'Downloading', path: '' },
  { key: 7, title: 'Torrenting', path: '' },
  { key: 8, title: 'Android/IOS', path: '' },
  { key: 9, title: 'Linux/MacOS', path: '' },
  { key: 10, title: 'Non-English', path: '' },
  { key: 11, title: 'Miscellaneous', path: '' }
];

export default function MyPage({ pageData }) {
  return (
    <div>
      <Navbar />
      <div className="flex h-screen">
        <div className="fixed top-0 w-64 pl-9 h-full bg-[#181818] overflow-y-auto">
          <Sidebar data={SidebarData} />
        </div>
        <div className="flex-1 overflow-y-auto bg-[#181818] ml-8 lg:ml-28 ">
          <div className="relative px-12 pt-28 lg:pl-48 lg:pt-24">
            <div>
              <h1 className="text-[#7bc5e4] font-semibold underline text-4xl">{pageData.pageTitle}</h1>
              <h1 className="text-[#5a5a5d]">{pageData.pageDesc}</h1>
              <h2 className=' h-px my-6 mt-12  bg-[#96969c] border-0' />
              {pageData.sections.map((section, index) => (
                <MySection key={index} section={section} />
              ))}
            </div>
            <h2 className="text-sm text-gray-400 no-underline mt-1 block"></h2>
          </div>
        </div>
      </div>
    </div>
  );
}
