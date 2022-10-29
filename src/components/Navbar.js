import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
//import { Button } from './Button';
//import Home from './pages/Home.js';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if(window.innerWidth <= 960){
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
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                    SeeColor <i className='fab fa-typeo3' />
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
                </ul>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/project-background' className='nav-links' onClick={closeMobileMenu}>
                            Background
                        </Link>
                    </li>
                </ul>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/project' className='nav-links' onClick={closeMobileMenu}>
                            Project
                        </Link>
                    </li>
                </ul>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/research-links' className='nav-links' onClick={closeMobileMenu}>
                            Research Links
                        </Link>
                    </li>
                </ul>
               {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} 
                    <Link to='/register-or-login' className='Sign-Up' onClick={closeMobileMenu}></Link> */}
            </div>
        </nav>
    </>
  )
}

export default Navbar

/* LOGIN REMOVED:

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/project' className='nav-links' onClick={Home.handleGuestModeSubmit}>
                            Continue as Guest
                        </Link>
                    </li>
                </ul>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                            Login
                        </Link>
                    </li>
                </ul>
                */