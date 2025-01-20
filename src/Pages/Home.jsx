
import React, { useState } from 'react';
import Banner from '../Components/PageComponent/Banner';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { IoMdAdd } from "react-icons/io";
import Followarea from '../Components/PageComponent/Followarea';




const Home = () => {
  const [Show, setShow] = useState(null);
  const [filter, setFilter] = useState('All');



  const itemData = [
    { image: 'https://images.unsplash.com/photo-1546345414-16d37d6baa05?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', titles: 'Human' },
    { image: 'https://images.unsplash.com/photo-1712593548967-5d9b8a050fe6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', titles: 'Video' },
    { image: 'https://plus.unsplash.com/premium_photo-1723507306975-36dfe1666df3', titles: 'Human' },
    { image: 'https://images.unsplash.com/photo-1734249201319-e7227b1b4f54', titles: 'Country' },
    { image: 'https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc', titles: 'Video' },

    { image: 'https://images.unsplash.com/photo-1734878154223-207c586486b2', titles: 'Human' },
    { image: 'https://images.unsplash.com/photo-1733252284977-0d70fc34c341', titles: 'Nature' },

    { image: 'https://images.unsplash.com/photo-1440942788614-7429a62bc8d0', titles: 'Nature' },
    { image: 'https://images.unsplash.com/photo-1733169312713-fd0c6963487a', titles: 'Nature' },
    { image: 'https://images.unsplash.com/photo-1734555772459-dbed9a9f1dbf', titles: 'Country' },
    { image: 'https://images.unsplash.com/photo-1702884161987-9203dbb9b0a1', titles: 'Video' },
  ];

  const filteredData = filter === 'All' ? itemData : itemData.filter(item => item.titles === filter);

  return (
    <div>
      <Banner />
      <div className="flex flex-row justify-center relative items-center text-3xl gap-14 font-bold py-24">
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Human')}>Human</button>
        <button onClick={() => setFilter('Nature')}>Nature</button>
        <button onClick={() => setFilter('Country')}>Country</button>
        <button onClick={() => setFilter('Video')}>Video</button>
      </div>
      <div className="flex pb-10 items-center flex-col gap-10 ">
        <ImageList
          className="flex items-center justify-center lg:w-[1200px]"
          variant="masonry"
          cols={4}
        >
          {filteredData.map((val, i) => (
            <div
              key={i}
              onMouseEnter={() => setShow(i)}
              onMouseLeave={() => setShow(null)}
            >
              <ImageListItem key={val.image}>
                <div className="flex group overflow-hidden items-center bg-cover cursor-pointer bg-green-500">
                  <img
                    srcSet={`${val.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${val.image}?w=248&fit=crop&auto=format`}
                    alt={val.titles}
                    loading="lazy"
                    className={`group-hover:scale-110 ${Show === i ? 'transition-all' : 'opacity-100'
                      } transition-all ease-in-out duration-300 h-full w-full bg-contain ${i === 0 || i === 3 || i === 4 ? 'h-[400px]' : ''

                      }`}
                  />
                  {Show === i && (
                    <button
                      className="absolute top-1/2 left-1/2 transform z-10 -translate-x-1/2 -translate-y-1/2 hover:text-white text-white bg-red-500 rounded-full p-5 hover:bg-black"
                    >
                      <IoMdAdd size={28} />
                    </button>
                  )}
                </div>
              </ImageListItem>
            </div>
          ))}
        </ImageList>
        <div className="flex flex-row justify-center items-end my-28 ">
          <button className="hover:bg-red-500 hover:text-white text-black border-2 text-2xl border-red-500 bg-transparent px-12 py-2 rounded-full">
            View more
          </button>
        </div>
      </div>
      <div className='bg-pink-600'>
        <div className='flex flex-col justify-center items-center gap-3'>
          <h1 className='font-bold text-3xl'>Follow Instagram</h1>
          <p>@Alime_Photographer</p>
        </div> 
        <div >

        </div>

      </div> 
     </div> 
  );
};

export default Home