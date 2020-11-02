import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <Link to='/' className='navbar-logo'>
            Silkworm books
          </Link>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-info">Images by rawpixel.com</li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' >
                Home
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link to='/forms' className='nav-links'>
                Forms
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
              >
                Sign Up
              </Link>
            </li> */}
          </ul>
          

          {/* <Button></Button> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
