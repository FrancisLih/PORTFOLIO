import React from 'react'

const Experience = () => {
  return (
    <div className='text-center'>
        <h1 className='font-extrabold text-6xl text-secondary'>EXPERIENCE</h1>
        <div className="Cards grid grid-cols-3">
            <div className="card p-12">
                <img src="public/img/html-logo.png" className="w-[150px] mx-auto p-3 hover:shadow-md " alt="" />
                <h2>HTML</h2>
            </div>
            <div className="card p-12">
                <img src="public/img/css-logo.png" className="w-[90px] mx-auto p-3 hover:shadow-md" alt="" />
                <h2>CSS3</h2>
            </div>
            <div className="card p-12">
                <img src="public/img/react-logo.png" className="w-[130px] mx-auto p-3 hover:shadow-md" alt="" />
                <h2>React.JS</h2>
            </div>
            <div className="card p-12">
                <img src="public/img/tailwind-logo.png" className="w-[130px] mx-auto p-3 hover:shadow-md" alt="" />
                <h2>Tailwind</h2>
            </div>
            <div className="card p-12">
                <img src="public/img/wp-logo.png" className="w-[200px] mx-auto p-3 hover:shadow-md" alt="" />
                <h2>WordPress</h2>
            </div>
            <div className="card p-12">
                <img src="public/img/PhpMyAdmin-logo.png" className="w-[130px] mx-auto p-3 hover:shadow-md" alt="" />
                <h2>MySQL Database</h2>
            </div>
           
            
        </div>
    </div>
  )
}

export default Experience