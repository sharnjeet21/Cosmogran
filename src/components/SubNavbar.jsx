// SubNavbar.js
import React from 'react';

const Subbar = ({isVisible}) => {
    return (
        <div className={`h-32 fixed bg-primary ${isVisible ? '' : 'hidden'}`}>
      <div className='w-full h-px bg-black fixed top-32 left-0'></div>

        </div>

    );
};

export default Subbar;
