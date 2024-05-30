import React from 'react';
import logo from '../assets/fmhy.ico';


const Sidebar = ({ data }) => {
  return (
    <div className='pt-5 bg-primary pl-7'>
        <div className='flex items-center'>
        <img src={logo} alt="Logo" className="h-6" />
        <h1 className='text-base font-normal text-secondary font-Outfit pl-2'>Cosmogran</h1>
      </div>
      <h2 className=' h-px my-5 mr-8 bg-[#28282b] border-0' />

      <ul>
        {data.map((item) => (
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
