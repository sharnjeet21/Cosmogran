import React from 'react'
import { Link } from 'react-router-dom'

export default function SidebarLink({data}) {
  return (
    <div>
        <a href= {data.path} className=" mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer">
                <i className="bi bi-house-door-fill"></i>
                <span className="text-[15px] ml-4 text-gray-400 hover:text-cyan-500">
                  {data.title}
                </span>
              </a>
    </div>
  )
}
