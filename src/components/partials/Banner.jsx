import React from 'react'
import { CiFileOn } from 'react-icons/ci'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { PiHandWaving } from 'react-icons/pi'
import { SiCredly } from 'react-icons/si'

const Banner = () => {
  const onButtonClick = () =>{
    const pdfUrl = "Navarro_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Navarro_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div id='home' className="max-w-[1200px] mx-auto px-4 h-screen">
    <div className='2xl:grid grid-cols-2 gap-30 translate-y-24  '>
        <div className='self-center p-14'>
            <h4 className='text-md'>Hi! I'm </h4>
            <h1 className='font-thin text-5xl overflow-hidden whitespace-nowrap tracking-[0.15em] animate-[typing_3.5s_steps(40,end),blink-caret_0.75s_step-end_infinite] mx-auto my-0 border-r-[0.15em] border-r-primary border-solid'>FRANCIS LIH</h1>
            <h2 className='font-extrabold text-5xl text-secondary'>NAVARRO</h2>
            <h3 className='font-bold'>WEB DEVELOPER</h3>
                <div className='flex gap-3 pt-2'>
                    <button onClick={onButtonClick} className='btn btn--secondary flex gap-2 text-md '>Download CV <CiFileOn className='text-lg'/></button>
                    <button className='btn btn--primary flex gap-2 text-md '>Let's Talk <PiHandWaving className='text-lg'/></button>
                </div>
        </div>
        <div>
            <img src="/img/img-banner.png" className='rounded-full shadow-md ' alt="" />
        </div>
    </div>
    </div>
  )
}

export default Banner