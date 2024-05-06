import React, { useState, useEffect, useRef } from 'react';
import SidebarLink from './SidebarLink';
import './Sidebar.css';
import logo from '../assets/fmhy.ico';
import menu from '../assets/menu.svg';

export default function Sidebar({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  function openBar() {
    setIsOpen(true);
  }

  function closeBar(event) {
    if (!isOpen || (sidebarRef.current && sidebarRef.current.contains(event.target))) return;
    setIsOpen(false);
  }

  useEffect(() => {
    document.addEventListener('click', closeBar);
    return () => document.removeEventListener('click', closeBar);
  }, [isOpen]);

  return (
    <>
      <div
        ref={sidebarRef}
        className={`font-sans ${isOpen ? 'left-0' : '-left-64'}`}
        onClick={closeBar}
      >
        <span className="absolute text-white text-sm top-14 left-4 cursor-pointer" onClick={openBar}>
          <img src={menu} alt="Menu" className="w-6" />
        </span>
        <div className={`z-50 sidebar absolute top-0 bottom-0 left-0 lg:left-0 ${isOpen ? 'left-0' : '-left-64'} duration-1000 p-2 w-64 overflow-y-auto text-center bg-[#181818]  shadow h-screen scrollbar-thin`} style={{ paddingRight: '8px' }}>
          <div className="text-gray-100 text-xl">
            <div className="p-2.5 mt-1 flex items-center rounded-md ">
              <img src={logo} alt="Logo" className="h-6" />
              <h1 className="text-2xl ml-3 text-gray-200 font-bold">COSMOGRAN</h1>
              <i className="bi bi-x ml-20 cursor-pointer lg:hidden" onClick={openBar}></i>
            </div>
            <div className="my-3 mb-6 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10"></div>
            {data.map((item) => (
              <SidebarLink key={item.key} data={item} />
            ))}
          </div>
        </div>
      </div>
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" />}
    </>
  );
}
