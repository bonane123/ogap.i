import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return <div className="w-full bg-sky-950 h-full p-10 font-Roboto" >
    <div className="lg:w-10/12 flex mx-auto " >
    <div className="lg:mr-1">
        <h2 className="text-2xl font-bold text-white" >
        <span className="text-red-400" >0</span>
        GAP.I
        </h2>
    </div>
    <div className="lg:ml-10" >
        <NavLink to="/" className='p-2 px-6 text-white bg-teal-500 mx-4 rounded-tl-full'>Services</NavLink>
        <NavLink to="/" className='p-2 px-6 text-white bg-teal-500 mx-4'>Team</NavLink>
        <NavLink to="/" className='p-2 px-6 text-white bg-teal-500 mx-4'>About</NavLink>
        <NavLink to="/" className='p-2 px-6 text-white bg-teal-500 mx-4 rounded-br-full'>Contact</NavLink>
    </div>

    </div>
  </div>
};

export default Navbar;
