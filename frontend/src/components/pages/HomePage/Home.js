import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from './Data';
import Pricing from '../../Pricing';

function Home() {
  return (
    <>
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjFive} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;