import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import  './Navbar.css';
import { IconContext } from 'react-icons/lib';
import Logo from '../images/android-chrome-256x256.png';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className="navbar">
              <div className="navbar-container container">
                  <Link to="/" className="navbar-logo"
                        onClick={closeMobileMenu}>
                      <MdFingerprint className="navbar-icon" />
                      <img src={Logo} alt="logo" width='50px' height='50px' />
                      Security
                  </Link>
                  <div className="menu-icon" onClick={handleClick} >
                    {click ? <FaTimes /> : <FaBars /> }
                 </div>
                 <ul className={click ? 'nav-menu active' : 'nav-menu' }>
                    <li className="nav-item">
                        <Link to="/" className="nav-links">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-links">
                           Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/apply" className="nav-links">
                           Apply
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links">
                           Contact
                        </Link>
                    </li>
           
                  <li className="nav-btn">
                        {button ? (
                            <Link to='/sign-up'
                             className="btn-link"
                             onClick={closeMobileMenu}
                             >
                                <Button buttonStyle='btn--primary' buttonSize='btn--large' buttonColor='blue'>Sign Up</Button>
                            </Link>
                        ): (
                            <Link to='/sign-up'
                             className="btn-link"
                             onClick={closeMobileMenu}
                             >
                            <Button buttonStyle='btn--gradient'
                                buttonSize='btn--large' buttonColor='blue'> Sign Up
                             </Button>
                            </Link>
                        )}
                    </li>
                    <li>
                        <form name="PrePage" method = "post" action = "https://Simplecheckout.authorize.net/payment/CatalogPayment.aspx" target="_blank"> <input type = "hidden" name = "LinkId" value ="3d049e1a-d97d-4d9b-98c2-fa5ac562010d" />
                        <input type = "submit" value = "Pay My Alarm Invoice" /> 
                        </form>
                    </li>
              
                 </ul>
              </div>
            </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;