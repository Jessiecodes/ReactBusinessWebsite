import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import  './Navbar.css';
import { IconContext } from 'react-icons/lib';
import Logo from '../images/servzing_shield.png';
import SSSLogo from '../images/SSS.png';

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
                      <img src={SSSLogo} alt="logo" width='60px' height='60px' />
                      <img src={Logo} alt="logo" width='60px' height='60px' />
                     
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
                        <Link to="/alarms" className="nav-links">
                          Alarms
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cameras" className="nav-links">
                          Cameras
                        </Link>
                    </li>
              
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links">
                           Contact
                        </Link>
                    </li>
                    <li>
                        <form name="PrePage" method = "post" action = "https://Simplecheckout.authorize.net/payment/CatalogPayment.aspx" target="_blank"> <input type = "hidden" name = "LinkId" value ="3d049e1a-d97d-4d9b-98c2-fa5ac562010d" />
                        <input type= "submit" value = "Pay My Alarm Invoice" /> 
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