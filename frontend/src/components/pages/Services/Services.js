import React from 'react';
import './Services.css';
import NightVision from '../../../images/nighttime.jpeg';
import Alexa from '../../../images/logo-alexa.svg';
import Google from '../../../images/logo-google-assistant.svg';
import LorexCameras from '../../../images/lorex_cameras.png';
import Panel from '../../../images/panel1.png';
import TV from '../../../images/TV.jpg';
import Design from '../../../images/Design.jpg';
import HandyManSm from '../../../images/handyman_small.jpg';
import HomeImprov from '../../../images/homeimprov.jpg';
import HeroSection from '../../HeroSection';
import { serviceObjOne, serviceObjTwo, serviceObjThree, serviceObjFour,serviceObjRing, serviceObjWeb } from './Data';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Fade from 'react-reveal/Fade';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { FaBraille, FaVectorSquare,FaRegIdBadge } from "react-icons/fa";

function Services() {
  return (
    <>
    <Fade>
      <HeroSection {...serviceObjOne} />
    </Fade>
    <Container>
    <Row>
        <Col>
        <Fade>
        <h1 className="Services_Section_Title"> Control your whole home with smarter security </h1>
        <div className="Services_Tabs">
        <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
          <Tab eventKey="home" title="Home Automation">
            <p className="tab_paragraph">
               <FaBraille />
               <br></br>
                Connect Alexa or Google Assistant to your security system quick and easy - we'll show you how.
             </p>
             <div className="home_security_voice">
              <img src={Alexa} alt="Amazon Alexa Security" />
              <img src={Google} alt="Google Assistant" />
            </div>
          </Tab>
          <Tab eventKey="profile" title="Smart technology">
            <p className="tab_paragraph">
               <FaVectorSquare /> 
               <br></br>
               Get Full home control for devices like your lights, locks, thermostat or garage door.  
               </p>
          </Tab>
          <Tab eventKey="contact" title="Remote Viewing" >
          <p className="tab_paragraph">
             <FaRegIdBadge /> 
             <br></br>
             Manage your whole system with the Free app included with installation. 
             The whole family can easily view, connect & control from anywhere, at anytime.
             
             </p>
          </Tab>
        </Tabs> 
        </div>
        </Fade>
        <Card border="danger" className="bg-dark text-white">
          <Card.Img src={NightVision} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>The Best home security systems</Card.Title>
            <Card.Text>Security Surveillance in Davie, Florida</Card.Text>
            <Card.Text>
              "Hey Google, show me backyard camera"
                <br></br>
              "Hey Google, turn on front porch siren"
                <br></br>
              "Hey Google, turn off garden light"
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        </Col>
    </Row>
</Container>
<Container className="Services_Wrapper">
<h1> We Serve with a <span className="Zing_color"> Zing </span> </h1>
      <Row>
      <CardDeck>
        <Card border="info" className="Card">
          <Card.Img variant="top" src={LorexCameras}  />
          <Card.Body>
            <Card.Title className="Card_Title">Security Cameras</Card.Title>
            <Card.Text>
             Effectively monitor your home from anywhere in the world 
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="primary" className="Card">
          <Card.Img variant="top" src={Panel} />
          <Card.Body>
            <Card.Title className="Card_Title">Alarm Monitoring</Card.Title>
            <Card.Text>
             Arm & Disarm from your smartphone with our FREE app
            {' '}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="info" className="Card">
          <Card.Img variant="top" src={TV} />
          <Card.Body>
            <Card.Title className="Card_Title">TV Mounting</Card.Title>
            <Card.Text>
              Beautify your home or office with TV mounting - no ugly wires  
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      <CardDeck>
        <Card border="info" className="Card">
          <Card.Img variant="top" src={Design}  />
          <Card.Body>
            <Card.Title className="Card_Title"> Web Design </Card.Title>
            <Card.Text>
             Experts in IT eager to build your business, optimize your brand and extend your reach in the digital world.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="primary" className="Card">
          <Card.Img variant="top" src={HandyManSm} />
          <Card.Body>
            <Card.Title className="Card_Title">HandyMan Services </Card.Title>
            <Card.Text>
              Electrical, cable & wire management, hurricane shutters{' '}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="info" className="Card">
          <Card.Img variant="top" src={HomeImprov} />
          <Card.Body>
            <Card.Title className="Card_Title"> Home Improvement </Card.Title>
            <Card.Text>
              Painting, pressure cleaning, furniture assembly, home audio and more
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      </Row>
    </Container>
    </>
  );
}

export default Services;