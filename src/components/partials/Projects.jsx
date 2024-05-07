import React from 'react'
import Works from '../showcase/Works'
import Certificate from '../showcase/Certificate'
import Badges from '../showcase/Badges'

const Projects = () => {

  const [showTab, setShowTab] = React.useState('certificate')
  const [isModalShow, setModalShow] = React.useState(false);
  const handleChangeTab = (tab) =>{
    setShowTab(tab)
}
  return (
    <>
    <div id='portfolio' className='project p-5'>
      <h6 className='text-center font-extrabold text-6xl text-secondary'>PORTFOLIO</h6>
      <ul className='flex gap-10 justify-center font-thin p-5'>
        <li><button className={`font-bold ${showTab=="works" ? "text-primary" :"" }`} onClick={() => handleChangeTab("works")}>Project</button></li>
        <li><button className={`font-bold ${showTab=="certificate" ? "text-primary" :"" }`} onClick={() => handleChangeTab("certificate")}>Certificates</button> </li>
        <li><button className={`font-bold ${showTab=="badge" ? "text-primary" :"" }`} onClick={() => handleChangeTab("badge")}>Badge</button> </li>
      </ul>

    </div>

    <div>
      {showTab === "works" &&<Works setModalShow ={setModalShow}/>}
      {showTab === "certificate" &&<Certificate setModalShow ={setModalShow}/>}
      {showTab === "badge" &&<Badges setModalShow ={setModalShow}/>}
    </div>

    {isModalShow &&  <ModalViewItem setModalShow={setModalShow}/>}

    </>
  )
  
}

export default Projects