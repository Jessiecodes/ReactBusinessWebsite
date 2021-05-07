import React from 'react';
import HeroSection from '../../HeroSection';
import { CameraOne, CameraTwo, CameraThree, CameraFour, CameraFive, CameraSix } from './Data';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import ImageGridList from '../../GridList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from '../../../images/home.jpg';

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
      <Container>
      <h1 className="Cameras_Gallery_title"> Security cameras for home and business protection</h1>
        <Row>
          <Col> 
            <img src={Home} alt="the best outdoor security cameras" />
          </Col>
          <Col> 
          <ImageGridList />
          </Col>
       </Row>
      </Container>

      <HeroSection {...CameraSix} />
    </>
  );
}

export default Cameras;