import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className='bg-black text-white px-2 py-4 items-center  '>

            
              <div className='w-11/12 mx-auto flex justify-between'>
              <div>Alime</div>
              <div className=' flex text-sm gap-6'>
              <Link to="/">Home</Link>
                <Link to="/pages">Pages</Link>
                <Link to="/about">About</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
              </div>
               </div>

            
        </div>


    )
}

export default Header
