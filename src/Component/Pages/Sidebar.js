import React from 'react';
import '../Style/Sidebar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUserTie, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <div className='main_sidebar'>
      <ul className='sidebar_list'>
        <Link to='/'><li className='sidebar_item'>
          <FontAwesomeIcon icon={faTachometerAlt} className='sidebar_icon' /> Dashboard
        </li>
        </Link>
       
        <Link to='/'> <li className='sidebar_item'>
          <FontAwesomeIcon icon={faUserTie} className='sidebar_icon' /> Employee Details
        </li>
        </Link>
        <li className='sidebar_item'>
          <FontAwesomeIcon icon={faSignOutAlt} className='sidebar_icon' /> Logout
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
