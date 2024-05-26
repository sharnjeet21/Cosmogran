import React from 'react';

const MySection = ({ section }) => {
    return (
        <div>
            <h2 className=' pb-7 text-white font-semibold text-2xl' >{section.title}</h2>
            <ul>
                {section.links.map(link => (
                    <li key={link.id}>
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className='text-[#7bc5e4] font-semibold'>
                            {link.isstar === "true" ? "⭐" : ""} {link.desc}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MySection;
 