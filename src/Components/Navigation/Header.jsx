import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='bg-black text-white px-2 py-5 items-center font-semibold'>
      <div className='w-11/12 mx-auto flex justify-between text-2xl'>
        <div>Alime</div>
        <div className=' flex text-2xl gap-16'>
          <Link to="/">Home</Link>
          <Link to="/pages">Pages</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  viewBox="0 0 24 24"><path fill="#fff" d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989t-1.96.35q-2.402 0-4.066-1.663T3.808 9.503T5.47 5.436t4.064-1.667t4.068 1.664T15.268 9.5q0 1.042-.369 2.017t-.97 1.668l6.262 6.261zM9.539 14.23q1.99 0 3.36-1.37t1.37-3.361t-1.37-3.36t-3.36-1.37t-3.361 1.37t-1.37 3.36t1.37 3.36t3.36 1.37"/></svg>
        </div>
      </div>
    </div>
  )
}

export default Header
