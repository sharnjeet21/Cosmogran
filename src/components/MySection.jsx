import React from 'react';
import TipCard from './TipCard';

const MySection = ({ section}) => {
    return (
        <div>
            <h2 className='pt-6 pb-2 text-secondary font-semibold font-Outfit text-2xl'>{section.title}</h2>
            {section.titleTip && <TipCard/>}
            <div className='items-center font-Outfit'>
            <ul className=' pt-3 '>
                {section.links.map(link => (
                    <li key={link.id}>
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className='text-orange font-semibold'>
                            {link.isstar === "true" ? "⭐" : ""} {link.desc}
                        </a>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
};

export default MySection;
