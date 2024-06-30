import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Sidebar = ({ data }) => {
  return (
    <div className="lg:pt-3 pt-32 h-screen pl-7 sidebar">
      <h1 className='font-Rey text-orange flex pl-16 pt-5'>Menu</h1>
      <h2 className="h-px lg:mt-0 mt-3 mb-5 mr-8 bg-yellow border-0" />

      <ul>
        {data.sidebarData.map((item) => (
          <Link to={item.path} key={item.key}>
            <li className="p-2 text-sm font-Outfit text-secondary hover:text-orange ">
              {item.title}
            </li>
          </Link>
        ))}
      </ul>

      <h2 className="h-px my-5 mr-8 bg-yellow border-0" />
      <ul>
        <span>{data.sidebarLinkData.heading}</span>
        {data.sidebarLinkData[0].links.map((item) => (
          <a href={item.path} key={item.key}>
            <li className="p-2 text-sm font-Outfit text-secondary">
              {item.title}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
