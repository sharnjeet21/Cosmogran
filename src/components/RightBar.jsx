import React from 'react';

const Rightbar = ({ sections, currentSection, isVisible }) => {
  return (
    <div className={`fixed right-0 top-0 sm:top-16 w-52 h-full lg:bg-primary backdrop-blur-3xl overflow-y-auto scrollbar-hide ${isVisible ? 'block' : 'hidden'}`}>
      <h2 className="text-lg font-Rey text-secondary pl-2 pt-4 lg:pt-12">On This Page</h2>
      <ul className="px-4">
        {sections.map((section, index) => (
          <li key={index}>
            <a
              href={`#${section.title}`}
              className={`block py-2 px-4 rounded ${
                currentSection === section.title ? 'bg-secondary text-secondary' : 'text-secondary font-Outfit'
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
