import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div className='lg:flex hidden gap-4'>
       <Link className='font-[montserrat] font-semibold text-white hover:text-gray-400' to="/">HOME</Link>
       <Link className='font-[montserrat] font-semibold text-white hover:text-gray-400' to="/recipes/about">ABOUT</Link>
       <Link className='font-[montserrat] font-semibold text-red-600 hover:text-white' to="/recipes/create">CREATE</Link>
       <Link className='font-[montserrat] font-semibold text-white hover:text-gray-400' to="/favourite">FAVOURITE</Link>
       <Link className='font-[montserrat] font-semibold text-white hover:text-gray-400' to="*">PAGE NOT FOUND</Link>
       <Link className='font-[montserrat] font-semibold text-white hover:text-gray-400' to="/recipes">RECIPES</Link>
       <Link className='font-[montserrat] font-semibold text-white hover:text-gray-400' to="/recipes/update">UPDATE</Link>
    </div>
  )
}

export default Navbar