import React from 'react';
import '../Style/Header.css';
import image1 from '../Landingimage/cspdcl.jpg';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const hideLoginLinkRoutes = [
    '/Layout',
    '/AdminLayout',
    '/EmpLogin',
    '/LandingPage',
    '/Dashboard',
  ];

  const shouldHideLoginLink = hideLoginLinkRoutes.some(route =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      <header className='header'>
        <div className='header-left'>
          <img src={image1} alt='CSPDCL Logo' className='header-logo' />
          <span className="header-title">CSPDCL Raipur</span>
        </div>

        <nav className='header-nav'>
          <ul className='header-ul'>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/Contactess'>Contact</Link></li>
            {!shouldHideLoginLink && (
              <li><Link to='/LandingPage'>Login</Link></li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
