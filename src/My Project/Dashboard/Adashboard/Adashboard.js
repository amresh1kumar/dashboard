import React from 'react'
import './Adashboard.css'
import image from '../img/employee.png'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import { Select } from 'antd'

const { Option } = Select
function Adashboard() {
  return (
    <div className='Adashboard_div'>  
    <img src={image} alt='' className='ADimg'/>
  
      <ul className='Adashboard_ul'>
       <Link to='/employee'><li>Register Here</li></Link>
       <Link to='/PersonDetails'><li>Employee Details</li></Link>
      
      </ul>
    </div>
  )
}

export default Adashboard
