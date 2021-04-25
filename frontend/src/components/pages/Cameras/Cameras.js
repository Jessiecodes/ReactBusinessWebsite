import React from 'react';
import HeroSection from '../../HeroSection';
import { CameraOne, CameraTwo, CameraThree, CameraFour, CameraFive, CameraSix } from './Data';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


function Cameras() {
  return (
    <>
    <Fade>
      <HeroSection {...CameraOne} />
    </Fade>
      <Fade left><HeroSection {...CameraTwo} /></Fade>
      <Fade right><HeroSection {...CameraThree} /></Fade>
      <Zoom>
        <HeroSection {...CameraFour} />
      </Zoom>
      <HeroSection {...CameraFive} />
      <HeroSection {...CameraSix} />
    </>
  );
}

export default Cameras;