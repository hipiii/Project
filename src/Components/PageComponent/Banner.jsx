  import React, { useEffect } from 'react'
  import { useState } from 'react';
  // import "react-responsive-carousel/lib/styles/carousel.min.css";

  // import ReactDOM from 'react-dom';
  // import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
  // import { Carousel } from 'react-responsive-carousel';

  const Banner = () => {

    const images = [

      'https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1466853817435-05b43fe45b39?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    ];
    const [slide, setSlide] = useState(0)

    function nextInd() {
      if (images.length - 1 == slide) {
        setSlide(0)
      } else {
        setSlide(slide + 1)
      }
    }

    function prevInd() {
      if (slide == 0) {
        setSlide(images.length - 1)
      } else {
        setSlide(slide - 1)
      }
    }

    // useEffect(() => {
    //   let interval;

    //   interval=setTimeout(() =>{
    //     nextInd();
    //   },2000);

    //   return () => {
    //     clearInterval(interval)
    //   }
    // },[slide])

    return (


      <div>
        <div className='flex flex-row relative overflow-clip h-lvh'>
          <div onClick={() => {
            nextInd()
          }} className='rounded-full absolute text-white bg-transparent hover:bg-red-500 hover:text-white z-10 top-1/2'><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path fill="currentColor" d="M11.53 6.47a.75.75 0 0 1 0 1.06l-3.72 3.72H18a.75.75 0 0 1 0 1.5H7.81l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0" /></svg></div>
          <div>
            {
              images.map((val, i) => {
                return (
                  <img src={val} alt="" className={`h-50 absolute ${i == slide ? "translate-x-0" : i < slide ? "translate-x-[1000px]" : "-translate-x-[10000px]"} transition-all delay-75 duration-1000 ease-in-out top-0 w-screen `} />
                )


              })
            }
          </div>
          <div className='relative gap-2 flex flex-col  items-center justify-center'>
            <div className='flex flex-col gap-12  h-full justify-center mt-12'>
              <div className='flex flex-col gap-4  mx-20'>
                <div className='flex flex-col gap-6 text-white '>
                  <h1 className='text-8xl font-bold '>Hello</h1>
                  <h1 className='text-8xl font-bold '> I'm Jackson</h1>
                </div>
                <p className='text-2xl text-white'>
                  I photograph very instinctively.I see how it is taken like that.I do not <br/> follow certain styles,philosophies or teachers
                </p>
              </div>

              <div className='items-center flex flex-row gap-5 px-24 py-2'>
                <button className='hover:bg-red-500 text-white border-2 text-2xl border-red-500 bg-transparent px-12 py-2 rounded-full'>Get a Quote</button>
                <h1 className='hover:text-red-500 text-white text-2xl'>hello.alime@gmail.com</h1>

              </div>
            </div>
          </div>
          <div onClick={() => {
            prevInd()
          }} className='text-6xl rounded-full text-white absolute hover:bg-red-500 hover:text-white right-0 top-1/2'><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path fill="currentColor" d="M12.47 6.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H6a.75.75 0 0 1 0-1.5h10.19l-3.72-3.72a.75.75 0 0 1 0-1.06" /></svg>
          </div>
        </div>
      </div>
    )
  }

  export default Banner
