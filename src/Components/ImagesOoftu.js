import React from 'react'
import '../Style/imagesooftu.css'
import ooftu1 from '../Images/ooftu6.png'
import ooftu2 from '../Images/ooftu2.png'
import ooftu3 from '../Images/ooftu3.png'
import ooftu4 from '../Images/ooftu4.png'
import ooftu5 from '../Images/ooftu5.png'

const ImagesOoftu = () => {
  return (
    <div className='images-content'>
        <img src={ooftu1} alt="ooftu1"/>
        <img src={ooftu2} alt="ooftu2"/>
        <img src={ooftu3} alt="ooftu3"/>
        <img src={ooftu5} alt="ooftu4"/>
        <img src={ooftu4} alt="ooftu5"/>
    </div>
  )
}

export default ImagesOoftu