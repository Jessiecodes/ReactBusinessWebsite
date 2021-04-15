import React from 'react';
import HeroSection from '../../HeroSection';
import { serviceObjOne, serviceObjTwo, serviceObjThree, serviceObjFour,serviceObjRing, serviceObjFive } from './Data';
import ServicesSection from '../../ServicesSection';
import InfoSection from '../../InfoSection';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


function Services() {
  return (
    <>
      <HeroSection {...serviceObjOne} />
      <ServicesSection />
      <InfoSection />
      <Fade left><HeroSection {...serviceObjTwo} /></Fade>
      <Fade right><HeroSection {...serviceObjThree} /></Fade>
      <Zoom>
        <HeroSection {...serviceObjFour} />
      </Zoom>
      <HeroSection {...serviceObjRing} />
      <HeroSection {...serviceObjFive} />
    </>
  );
}

export default Services;