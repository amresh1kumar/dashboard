import React from 'react'
import '../Style/Container.css'
import Sidebar from '../Pages/Sidebar' // Changed name from 'Container' to 'Sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
function Container() {
  return (
    <div>
      <div className='main_Container'>

        <BrowserRouter>
          <div className='sidebar'>
            <Sidebar />
          </div>
          <Routes>
            <Route path='/' element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default Container
