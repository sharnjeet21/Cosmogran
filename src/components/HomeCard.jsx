import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomeCard({data}) {
    const navigate = useNavigate();
    return (
        <div onClick={()=>(navigate(data.path))} className="card m-auto text-gray-300 max-w-[clamp(260px,80%,265px)] max-h-[clamp(250px,80%,300px)] hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-gray-900 to-gray-950 hover:from-gray-800 hover:to-gray-950 border-r-2 border-t-2 border-gray-900 m-4 rounded-2xl overflow-hidden relative mt-9 mb-6 mx-2 z-20 opacity-85">
            <div className="px-8 py-10">
                <div className="bg-purple-500 w-10 h-10 rounded-full rounded-tl-none group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-violet-900 transition-all"></div>
                <div className="mt-8   font-bold text-md font-Outfit">
                    {data.title}
                </div>
                <div className="text-gray-300 font-Outfit tracking-widest font-semibold mb-4 text-xs mt-4">
                    {data.desc}
                </div>
            </div>
            <div className="h-4 w-full bg-gradient-to-l via-purple-500 group-hover:blur-xl blur-2xl rounded transition-all absolute bottom-0"></div>
            <div className="h-0.5 group-hover:w-full bg-gradient-to-l  via-violet-950 group-hover:via-violet-500 w-[70%] m-auto rounded transition-all"></div>
        </div>
    )
}
