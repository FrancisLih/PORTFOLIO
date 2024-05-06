import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header  p-10 '>
        <div className='flex justify-between'>
            <img src="https://via.placeholder.com/80x40" className=' object-cover' alt="" />


            <ul className='nav mx-auto flex gap-20 '>
                <li className='nav-link'><Link to="#">HOME</Link></li>
                <li className='nav-link'><Link to="#">ABOUT</Link></li>
                <li className='nav-link'><Link to="#">SKILLS</Link></li>
                <li className='nav-link'><Link to="#">EXPERIENCE</Link></li>
                <li className='nav-link'><Link to="#">CONTACT</Link></li>
            </ul>

        </div>
    </header>
  )
}

export default Header