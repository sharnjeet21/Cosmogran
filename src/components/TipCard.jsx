import React from 'react';

const BulbIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6 mr-2"
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="#1a9468" 
        strokeWidth="1"
    >
        <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M12 2a7 7 0 0 0-7 7c0 2.613 1.4 4.964 3.414 6.187A2 2 0 0 1 9 17v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1a2 2 0 0 1 .586-1.414C17.6 13.964 19 11.613 19 9a7 7 0 0 0-7-7z"
        />
        <line x1="9" y1="21" x2="15" y2="21" />
        <line x1="10" y1="23" x2="14" y2="23" />
    </svg>
);

export default function TipCard() {
    return (
        <div className="relative drop-shadow-xl lg:w-4/6 lg:h-28 h-40 overflow-hidden rounded-xl bg-[#04694c]">
            <div className="absolute pt-2 flex flex-col pl-5 text-sm  text-[#1a9468] z-[1] opacity-90 rounded-xl inset-0.5 bg-[#1c2423]">
                <div className="flex items-center font-bold">
                    <BulbIcon />
                    <h1>Tip</h1>
                </div>
                <h2 className="mt-1">Don't run multiple general adblockers like uBlock Origin and Adblock Plus at the same time. Running more than one can cause breakage. This only applies to general adblockers, so running things like uBlock Origin and SponsorBlock at the same time is fine.</h2>
            </div>
        </div>
    );
}
