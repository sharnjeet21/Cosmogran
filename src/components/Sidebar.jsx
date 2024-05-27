import React from 'react';
import logo from '../assets/fmhy.ico';


const Sidebar = ({ data }) => {
  return (
    <div className='pt-5 bg-[#171717] '>
        <div className='flex items-center'>
        <img src={logo} alt="Logo" className="h-6" />
        <h1 className='text-base font-normal text-white pl-2'>Cosmogran</h1>
      </div>
      <h2 className=' h-px my-5 mr-8 bg-[#28282b] border-0' />

      <ul>
        {data.map((item) => (
          <a href={item.path}>
          <li key={item.key} className="p-2 text-sm text-[#96969c]">
            {item.title}
          </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
