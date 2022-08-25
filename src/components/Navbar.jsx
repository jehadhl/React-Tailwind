import React from 'react'
import { useState } from 'react'
import {logo , close , menu} from "../assets"
import {navLinks} from "../constants"
const Navbar = () => {
  const [ toggle , setToggle] = useState(false)
  return (
    <nav className='w-full flex py-6 items-center justify-between  navbar'>
       <img src={logo} alt="hoo-logo" className='w-[134px] h-[52px]'/>

       <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav , idx) => (
          <li 
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-white text-[16px]
           ${idx === navLinks.length -1 ? 'mr-0' : 'mr-10'}`}
          >
            <a href={`#${nav.id}`}>
                {nav.title}
            </a>
          </li>
        ))}
       </ul>

       <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close :menu} className="w-[28px] h-[28px] object-contain"
          onClick={()=> setToggle((toggle)=> !toggle)}
          alt="menu"
          />
          <div className={`${ toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0
          min-w-[140px] rounded-xl sidebar mx-4 my-2
          `}>
             <ul className='list-none flex justify-end items-center flex-1 flex-col'>
        {navLinks.map((nav , idx) => (
          <li 
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-white text-[16px]
           ${idx === navLinks.length -1 ? 'mr-0' : 'mb-4'}`}
          >
            <a href={`#${nav.id}`}>
                {nav.title}
            </a>
          </li>
        ))}
       </ul>
          </div>
       </div>
    </nav>
  )
}

export default Navbar