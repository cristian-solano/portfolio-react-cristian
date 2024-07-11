import React from 'react'
import '../Style/mailto.css'
import emails from '../Images/email.png'

const 
a = () => {
  return (
    <div className='mail-content'>
       <a href='mailto:cristiansolano1941@gmail.com' target='blank'>
            <img src={emails} alt="email"/> 
       </a> 
    </div>
  )
}

export default 
a