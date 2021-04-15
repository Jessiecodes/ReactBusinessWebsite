import React from 'react';
import HeroSection from '../../HeroSection';
import { Carousel } from 'react-bootstrap';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from './Data';
import Pricing from '../../Pricing';
import Zoom from 'react-reveal/Zoom';
import slide1 from '../../../images/Lorex_Home_Center.png';
import slide2 from '../../../images/flyer.png';
import slide3 from '../../../images/lynx5000.jpg';
function Home() {
  return (
    <>
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={slide1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={slide2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={slide3}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
     <Zoom>
        <HeroSection {...homeObjTwo} />
      </Zoom>
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFive} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;