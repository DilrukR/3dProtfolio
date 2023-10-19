import React from "react";

const Navbar = () => {
  return (
    <div className='fixed right-0 z-50  w-24 h-screen   flex justify-center items-center  '>
      <div>
        <ul className='text-white font-teko w-96  justify-between rotate-90 tracking-widest text-xl hidden lg:flex'>
          <li className=' hover:scale-150  transition-all duration-100 cursor-pointer'>
            Home
          </li>
          <li className=' hover:scale-150  transition-all duration-100 cursor-pointer'>
            About
          </li>
          <li className=' hover:scale-150  transition-all duration-100 cursor-pointer'>
            Works
          </li>
          <li className=' hover:scale-150  transition-all duration-100 cursor-pointer'>
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
