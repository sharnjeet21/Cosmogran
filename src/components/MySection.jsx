import React from 'react';
import TipCard from './TipCard';

const MySection = ({ section }) => {
    return (
        <div>
            <a href={section.titlePath} target="_blank" rel="noopener noreferrer" className='pt-6 pb-2 text-secondary  font-Rey text-2xl block'>
                {section.title}
            </a>
            {section.titleTip && <TipCard />}
            <div className='items-center font-Outfit'>
                <ul className=' pt-3 '>
                    {section.links.map(link => (
                        <li key={link.id}>
                            <a href={link.href} target="_blank" rel="noopener noreferrer" className='text-orange font-semibold'>
                                {link.isstar === "true" ? "⭐" : ""} {link.desc} {"- "}
                                <span className='text-secondary'>{link.sub}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MySection;
