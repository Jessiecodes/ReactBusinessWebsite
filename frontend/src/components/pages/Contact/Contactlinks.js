import React, {useState} from 'react';
import './Contact.css';
import { FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';


const handleURL = (url) => {
    return event => window.open(url, "_blank")
}

function Contact(props) {
  
    return (
        <div className="Contact__Form">
            Contact Us
     


                
            <div className="social__icons">
                <FaYoutube color='white' size='30px' style={{padding: '1%'}}
                onClick={handleURL('https://www.youtube.com/channel/UCK1FF4WXlUU2N8_ssbh0TRA')} />
                <FaInstagram color='white' size='30px' style={{padding: '1%'}}
                onClick={handleURL('https://www.instagram.com/djmsecuritycorp/')} />
                <FaLinkedin color='white' size='30px' style={{padding: '1%'}}
                onClick={handleURL('https://www.linkedin.com/in/dean-martin-9a401338/')} />
            </div>
        
        </div>
    )
}

export default Contact;
