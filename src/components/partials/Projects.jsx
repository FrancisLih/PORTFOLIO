import React from 'react'

const Projects = () => {
  return (

    <div className='project'>
      <h1 className='text-center'>PORTFOLIO</h1>

      <ul className='flex gap-10 justify-center'>
        <li><button>Works</button></li>
        <li><button>Certificates</button> </li>
      </ul>

      <div className="cards">

          <div className="">
              <div className="card">
                <img src="https://via.placeholder.com/300x200" alt="" />
                <h1>Work 1</h1>
                <h2>Lorem ipsum dolor sit amet consectetur.</h2>
              </div>

            </div>
            
      </div>

    </div>
  )
}

export default Projects