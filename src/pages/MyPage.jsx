import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../components/Sidebar';
import Snavbar from '../components/Snavbar';
import Subbar from '../components/SubNavbar'; // Import the SubNavbar component
import MySection from '../components/MySection';
import '../components/ScrollbarHide.css';

export default function MyPage({ pageData, SidebarData }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && !menuButtonRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleSidebar = (event) => {
    event.stopPropagation(); // Prevent click event from propagating to document
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Snavbar />
      <Subbar isVisible={window.innerWidth < 1024}/>
      <div className="flex h-screen">
        {/* Conditionally render the sidebar based on screen size and state */}
        <div ref={sidebarRef} className={`fixed z-30 top-0 w-64 pl-9 h-full bg-[#181818] overflow-y-auto scrollbar-hide lg:block ${isSidebarOpen ? '' : 'hidden'}`}>
          {/* Add 'scrollbar-hide' class here */}
          <Sidebar data={SidebarData} />
        </div>
        <div className="flex-1 overflow-y-auto bg-[#1a1a1a] lg:ml-28 ">
          <div className="relative px-12 lg:pt-28 lg:pl-48 pt-24 ">
            <div>
              <h1 className="text-[#7bc5e4] font-semibold underline text-4xl">{pageData.pageTitle}</h1>
              <h1 className="text-[#5a5a5d]">{pageData.pageDesc}</h1>
              <h2 className=' h-px my-6 mt-12  bg-[#96969c] border-0' />
              {pageData.sections.map((section, index, title) => (
                <MySection key={index} title={title} section={section} />
              ))}
            </div>
            <h2 className="text-sm text-gray-400 no-underline mt-1 block"></h2>
          </div>
        </div>
      </div>
      {/* Menu button for mobile screens */}
      <div ref={menuButtonRef} className="fixed lg:hidden flex justify-center top-16 pt-3 ">
        <button onClick={toggleSidebar} className="text-white py-2 px-4 rounded">Menu</button>
      </div>
    </div>
  );
}
