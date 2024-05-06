import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaMapPin, FaTwitter } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'
import { SiCredly } from 'react-icons/si'

const Footer = () => {
  return (
    <div className='footer flex justify-between items-center'>
      
      <div>
        <h1 className=''>Contact</h1>
        <h4 className='flex  items-center '><FaMapPin /> 1-024 J.V Quesada St. Ibaba del sur Paete, Laguna</h4>
      </div>

      <div>
        <h3 className='flex gap-2 items-center '><MdAlternateEmail className='font-semibold'/>francislihdnavarro@gmail.com</h3>
      </div>

      <ul className='flex gap-4 items-center'>
            <li><button><FaFacebook /></button></li>
            <li><button><FaTwitter /></button></li>
            <li><button><FaInstagram /></button></li>
            <li><button><FaLinkedin /></button></li>
            <li><button><SiCredly /></button></li>
        </ul>

    </div>
  )
}

export default Footer