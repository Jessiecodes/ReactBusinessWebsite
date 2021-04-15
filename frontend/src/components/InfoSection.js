import React from 'react';
import './InfoSection.css';
import { Button } from './Button';
import { IconContext } from "react-icons";
import Card from 'react-bootstrap/Card';
import { FaLock } from 'react-icons/fa';
import IMG from '../images/svg-11.svg';
import Info from './InfoSecData';

function InfoSection({
  lightBg,
  sectionTitle,
  lightText,
  TextDesc,
  cardHeadline,
  cardDesc,
  IMG,
  alt
}) {
  return (
    <IconContext.Provider
    value={{ color: 'crimson', size: '50px' }}>
    <div className={lightBg ? 'InfoSection-container' : 'InfoSection-container-dark' }>
      <section className='InfoSection-description'>
        <div className='InfoSection-Icon'>
         <FaLock />
        </div>
        <p className='InfoSection-description-heading'>
          <h1 className={sectionTitle ? 'InfoSection-title' : 'InfoSection-title-dark'}> Home and business security, direct from the industry leader </h1>
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className={!lightText ? 'InfoSection-description-text' : 'InfoSection-description-text-dark'}>
          {TextDesc}
        </p>
      </section>
      <div className='InfoSection-cards'>
        <div className='InfoSection-card-wrapper'>
          <div className='InfoSection-card-items'>
          {Info.map((InfoItem, index) => (
        <Card style={{ width: '18rem', padding: '1rem', textAlign: 'center' }}
        key={index}>
        <Card.Img variant="top" src={InfoItem.IMG} alt={alt} className="Card_IMG" />
        <Card.Body>
          <Card.Title>
            <div className={InfoItem.cardHeadline}>
            <h2> {InfoItem. cardHeadline}  </h2> 
          </div>
          </Card.Title>
          <Card.Text>
            {InfoItem.TextDesc}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
        ))}

         
        </div>
       
     
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='InfoSection-logo'>

          </div>
          <small className='Floating_text'>Save with us </small>
         
        </div>
      </section>
    </div>
    </IconContext.Provider>
  );
}

export default InfoSection;