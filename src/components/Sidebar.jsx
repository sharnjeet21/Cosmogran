import React from 'react';

const Sidebar = ({ data }) => {
  return (
    <div className='pt-16 bg-[#171717]'>
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
