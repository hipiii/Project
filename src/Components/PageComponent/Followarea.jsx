import React from 'react'
import { useState } from 'react'

const Followarea = () => {
    const follow= [
        'https://images.unsplash.com/photo-1736024759853-97fbaef8ac62?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1733252284977-0d70fc34c341?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1607522783211-cb0d1ffdab8a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1731819536197-d2d93d89810c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1729346497561-8ed4c2106feb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1502810190503-8303352d0dd1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ]

    const [slide, setSlide] = useState(0)

    function nextimage() {
        if (follow.length - 1 == slide) {
            setSlide(0)
        } else {
            setSlide(slide + 1)
        }
    }



    return (
        <div>
            <div className='flex flex-row overflow-clip h-lvh w-full'>
                <div onClick={() => {
                    nextimage()
                }} >
                    <div>
                        {
                            follow.map((val, i) => {
                                return (
                                    <img src={val} alt="" className={`h-50 absolute ${i == slide ? "translate-x-0" : i < slide ? "translate-x-[1000px]" : "-translate-x-[10000px]"} transition-all delay-75 duration-1000 ease-in-out top-0 w-screen `} />
                                )


                            })
                        }
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Followarea
