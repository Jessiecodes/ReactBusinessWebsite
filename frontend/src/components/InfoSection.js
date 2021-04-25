import React from 'react';
import './InfoSection.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup'
import { BsPeople, BsFillCaretRightFill  } from "react-icons/bs";
import IMG from '../../src/images/nightwision.png';
import HandyMan from '../../src/images/handyman.jpg'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Desk from '../images/desk.jpg';
import Servzing from '../images/SERVZING_BANNER.jpg';
import Commercial from '../images/commerical.jpg';
import Residential from '../images/residential.jpg';

function InfoSection() {
    return (
        <div className="Home_Carousel_Wrapper">
        <Container fluid>
            <Carousel className="Home_Carousel">
            <Carousel.Item interval={500} className="Carousel_item">
                    <img
                    className="d-block w-100"
                    src={Commercial}
                    alt="Commercial and residential security systems"
                    />
                    <Carousel.Caption className="CarouselCaption">
                    <h3>Commercial Security </h3>
                    <p>
                        Affordable security services for businesses 
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000} className="Carousel_item">
                    <img
                    className="d-block w-100"
                    src={Desk}
                    alt="First slide"
                    />
                    <Carousel.Caption className="CarouselCaption">
                    <h3>Business Professionals with over 30 years experience.</h3>
                    <p>
                        No customer complaints - All 5 star reviews 
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="Carousel_item">
                    <img
                    className="d-block w-100"
                    src={Residential}
                    alt="Third slide"
                    />
                    <Carousel.Caption  className="CarouselCaption">
                    <h3>Residential Security</h3>
                    <p>Protect your home and loved ones </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="Carousel_item">
                    <img
                    className="d-block w-100"
                    src={HandyMan}
                    alt="Third slide"
                    />
                    <Carousel.Caption  className="CarouselCaption">
                    <h3>HandyMan Services</h3>
                    <p>Pressure cleaning, TV Mounting, painting, electrical are some services to name a few..</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="Carousel_item">
                    <img
                    className="d-block w-100"
                    src={Servzing}
                    alt="security systems near me"
                    />
                    <Carousel.Caption  className="CarouselCaption">
                    <h3>SERVZING</h3>
                    <p> A business dedicated to helping other businesses</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </Container>
  
            <Container fluid>
                <Row>
                    <Col sm={7}>
                        <BsPeople className="people_icon" />
                        <h1 className="AllinOne">Your ALL-in-One Servicing Solution</h1>
                        <Image src={IMG} fluid className="jumbo_img" />
                    </Col>
                    <Col sm={5}>
                    <ListGroup className="General_List">
                        <ListGroup.Item><BsFillCaretRightFill /> Security Cameras </ListGroup.Item>
                        <ListGroup.Item><BsFillCaretRightFill /> Smart Home Security </ListGroup.Item>
                        <ListGroup.Item><BsFillCaretRightFill /> Alarm Monitoring </ListGroup.Item>
                        <ListGroup.Item><BsFillCaretRightFill /> HandyMan Services</ListGroup.Item>
                        <ListGroup.Item><BsFillCaretRightFill /> T.V Mounting </ListGroup.Item>
                        <ListGroup.Item><BsFillCaretRightFill /> Web Design/Development </ListGroup.Item>
                        <ListGroup.Item><BsFillCaretRightFill /> Digital Marketing </ListGroup.Item>
                        <ListGroup.Item><BsFillCaretRightFill /> Photo & Video Editing </ListGroup.Item>
                    </ListGroup>

                    </Col>
                </Row>
            </Container>

    </div>
    )
}

export default InfoSection

