import React, { useState } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            In-Sightz
            <i className="fa-solid fa-square-poll-vertical"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/Analytics'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Analytics
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/schedule'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Schedule
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/Alerts'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Alerts
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/Account'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Account
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/Login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Log-In
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>Log-In</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;