import React from 'react';
import './Dashboard.css';
// import Aheader from './HeaderAdmin/Aheader';
import Adashboard from './Adashboard/Adashboard'
import EmployeeDetails from './Adashboard/EmployeeDetails';
import PersonDetails from './Adashboard/PersonDetails';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <BrowserRouter>
      {/* <Aheader/> */}
      <div className='dashboard_Container'>
       <div className='dashboard_sub1'>
       <Adashboard/>
       </div> 
        <div className='dashboard_sub2'>
          <Routes>
          <Route path='/employee' element ={<EmployeeDetails/>}/>
          <Route path='/PersonDetails' element ={<PersonDetails/>}/>
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default Dashboard;
