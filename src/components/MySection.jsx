import React from 'react';
import TipCard from './TipCard';

const MySection = ({ section}) => {
    return (
        <div>
            <h2 className='pt-6 pb-2 text-white font-semibold text-2xl'>{section.title}</h2>
            {section.titleTip && <TipCard/>}
            <ul className='list-disc list-inside pt-3' style={{ color: 'white' }}>
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
