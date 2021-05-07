import React from 'react';
import HeroSection from '../../HeroSection';
import InfoSection from '../../InfoSection';
import { homeObjThree, homeObjFour } from './Data';
import CarouselTestimonials from './../../Carousel';
import Fade from 'react-reveal/Fade';


function Home() {
  return (
    <>
     <Fade>
        <InfoSection /> 
      </Fade>
      
      <CarouselTestimonials />
      <Fade>
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
      </Fade>
    </>
  );
}

export default Home;