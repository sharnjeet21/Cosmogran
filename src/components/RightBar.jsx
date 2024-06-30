import React, { useEffect, useRef, useState } from 'react';

const Rightbar = ({ sections, currentSection, isVisible, onClose }) => {
  const rightbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (rightbarRef.current && !rightbarRef.current.contains(event.target)) {
        // Close rightbar if clicking outside
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div ref={rightbarRef} className={`fixed right-0 top-0 sm:top-16 w-52 h-full lg:bg-primary backdrop-blur-3xl overflow-y-auto scrollbar-hide ${isVisible ? 'block' : 'hidden'}`}>
      <div className="flex justify-between items-center px-4 pt-4">
        <h2 className="text-lg font-Rey text-secondary">On This Page</h2>
      </div>
      <ul className="px-4 pb-20">
        {sections.map((section, index) => (
          <li key={index}>
            <a
              href={`#${section.title}`}
              className={`block py-1 px-4 rounded ${
                currentSection === section.title ? 'text-orange font-bold' : 'text-secondary font-Outfit '
              }`}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rightbar;
