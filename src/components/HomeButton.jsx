import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function HomeButton({data}) {
    const navigate = useNavigate()
  return (
    <Link to={data.path} className="whitespace-nowrap flex justify-center">
      <div className='mt-80'>
    <button className="z-20 relative bg-blue-200 hover:bg-blue-400 text-black font-bold py-3 px-6 rounded-full shadow-lg shadow-neutral-950 hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 " >
      <p className='font-medium text-sm'>{data.title}</p>
    </button>
    </div>
  </Link>
  )
}
