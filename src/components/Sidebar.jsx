import React from 'react';
import logo from '../assets/fmhy.ico';


const Sidebar = ({ data }) => {

  return (
    <div className='pt-5 bg-primary pl-7'>
        <div className='flex items-center'>
        <img src={logo} alt="Logo" className="h-6" />
        <a href='/'>
        <h1 className='text-base font-normal text-secondary font-Rey pl-2'>Cosmogran</h1>
        </a>
      </div>
      <h2 className=' h-px my-5 mr-8 bg-[#28282b] border-0' />

      <ul>
        {data.sidebarData.map((item) => (
          <a href={item.path}>
          <li key={item.key} className="p-2 text-sm font-Outfit text-secondary">
            {item.title}
          </li>
          </a>
        ))}
      </ul>

      <h2 className=' h-px my-5 mr-8 bg-[#28282b] border-0' />
      <ul>
        <span>{data.sidebarLinkData.heading}</span>
        {data.sidebarLinkData[0].links.map((item) => (
          <a href={item.path}>
          <li key={item.key} className="p-2 text-sm font-Outfit text-secondary">
            {item.title}
          </li>
          </a>
        ))}
      </ul>
      
    </div>
  );
};

export default Sidebar;
