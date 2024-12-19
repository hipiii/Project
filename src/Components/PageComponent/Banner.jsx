import React, { useEffect } from 'react'
import { useState } from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
  
  const images = [
    'https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGphcGFufGVufDB8fDB8fHww',
    'https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  ];
  const [slide, setSlide] = useState(0)
  function nextInd(){
    if(images.length-1==slide){
      setSlide(0)
    }else{
      setSlide(slide+1)
    }
  }

  function prevInd(){
    if(slide==0){
      setSlide(images.length-1)
    }else{
      setSlide(slide-1)
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
        <div onClick={()=>{
          nextInd()
        }}className='rounded-full absolute  bg-transparent hover:bg-red-500 hover:text-white z-10 top-1/2'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M11.53 6.47a.75.75 0 0 1 0 1.06l-3.72 3.72H18a.75.75 0 0 1 0 1.5H7.81l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0" /></svg></div>
        <div>
          {
            images.map((val, i) => {
              return (
                <img src={val} alt="" className={`h-50 absolute ${i == slide ? "translate-x-0" : i < slide ? "translate-x-[1000px]" : "-translate-x-[10000px]"} transition-all delay-75 duration-1000 ease-in-out top-0 w-screen `} />
              )


            })
          }
        </div>
        <div className='relative gap-6 items-center justify-center text-red-400 px-16 py-20 my-12 '>
          <h1 className='text-3xl font-bold'>Hello<br/>I am Jackson</h1>
          <p className='text-xl mb-6'>
            I photograph very instinctively.I see how it is taken like that.I do not <br/> follow certain styles,philosophies or teachers
          </p>
        </div>
        <div onClick={() => {
          prevInd()
        }} className='text-6xl rounded-full absolute bg-red-500 right-0 top-1/2'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M12.47 6.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H6a.75.75 0 0 1 0-1.5h10.19l-3.72-3.72a.75.75 0 0 1 0-1.06" /></svg>
</div>


      </div>
    </div>
  )
}

export default Banner
