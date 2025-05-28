import React from 'react'
import './Aheader.css'
import image from './CSPDCL.jpg'

function Aheader() {
  return (
    <div className='Aheader_container'>
      <div className='Aheader_sub'>
        <img src={image} alt=''className='Aimg'/>
        <h2 className='Ah2'>Welcome to Employee Master Data</h2>
        <button className='Logout'>Logout</button>


      </div>
    </div>
  )
}

export default Aheader
