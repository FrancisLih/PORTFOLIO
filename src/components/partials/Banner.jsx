import React from 'react'
import { PiHandWaving } from 'react-icons/pi'

const Banner = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 h-screen">
    <div className='grid grid-cols-2 gap-10 translate-y-24'>
        <div className='self-center'>
            <h4 className='text-md '>Hi! I'm </h4>
            <h1 className='font-thin text-6xl'>FRANCIS LIH</h1>
            <h2 className='font-extrabold text-6xl text-secondary'>NAVARRO</h2>
            <h3 className='font-bold'>WEB DEVELOPER</h3>
                <div className='pt-2'>
                    <button className='btn btn--primary flex gap-2 text-md '>Let's Talk <PiHandWaving className='text-lg'/></button>
                </div>
        </div>
        <div>
            <img src="/public/img/img-banner.png" className='rounded-full shadow-md' alt="" />
        </div>
    </div>
    </div>
  )
}

export default Banner