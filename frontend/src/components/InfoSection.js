import React from 'react';
import './InfoSection.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup'
import { BsPeople, BsFillCaretRightFill  } from "react-icons/bs";
import IMG from '../../src/images/nightwision.png';
import Remote from '../images/svg-12.svg';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Banner1 from '../images/banner1.jpg';
import Servzing from '../images/bullet.png';
import Commercial from '../images/handydude.jpg';
import Residential from '../images/svg-11.svg';

function InfoSection() {
    return (
        <div className="Home_Carousel_Wrapper">
        <Container id="carousel_container">
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
                    src={Banner1}
                    alt="Affordable security systems"
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
                    alt="affordable security systems near me"
                    />
                    <Carousel.Caption  className="CarouselCaption">
                    <h3>Residential Security</h3>
                    <p>Protect your home and loved ones </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="Carousel_item">
                    <img
                    className="d-block w-100"
                    src={Remote}
                    alt="security systems with no contracts"
                    />
                    <Carousel.Caption  className="CarouselCaption">
                    <h3>Remote Access</h3>
                    <p> Keep an eye on your properties no matter where you are, enjoy your vacations now with peace of mind. </p>
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

