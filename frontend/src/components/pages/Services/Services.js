import React from 'react';
import HeroSection from '../../HeroSection';
import { serviceObjOne, serviceObjTwo, serviceObjThree, serviceObjFour } from './Data';
import Pricing from '../../Pricing';


function Services() {
  return (
    <>
      <HeroSection {...serviceObjOne} />
      <Pricing />

    </>
  );
}

export default Services;