import React from 'react';
import './Alarms.css';
import HeroSection from '../../HeroSection';
import { homeObjFive } from './../../pages/HomePage/Data';
import { BsGem,
         BsBuilding,
         BsFillAwardFill,
         BsFillBrightnessAltHighFill,
         BsFillGiftFill,
         BsHouse,
         BsPersonCheckFill } from "react-icons/bs";
import {FaHandHoldingHeart  } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import Alarm1 from '../../../images/alarm4.webp';
import Alarm2 from '../../../images/alarm3.webp';
import Alarm3 from '../../../images/remote.png';
import Alarm4 from '../../../images/alarmslide4.jpg';
import Alarm5 from '../../../images/honeywell1.jpg';
import Alarm6 from '../../../images/alarm1.webp';
import Fade from 'react-reveal/Fade';

function Alarms() {
    return (
        <div>
            <Container>
                 <Jumbotron id="Alarm_Jumbo" >
                        <div className="Left_Column">
                        <small className="small_text">Customize your Alarm System </small>
                            <h1>Honeywell Lynx Touch L5000</h1>
                            <p className="p-50">
                            The L5000 supports 16 user codes, as well as 16 programmable reminders, and 128 log events are just a few of the top-notch standard capabilities of this device.
                            The L5000 is guaranteed to be the solution you need for wireless security control.
                            <Button variant="danger w-50 mt-5"><a href="mailto:servzing@gmail.com" target="_blank"></a>Learn more</Button>
                            </p>
                      
                        </div>
                      <div className="Right_Column">
                        <img
                        className="d-block w-100"
                        src={Alarm5}
                        alt="Alarm systems near me"
        
                        />
                    </div>
                </Jumbotron>
                </Container>     
            <Container>
                <Row>
            <CardGroup>
            <Card>
                <Card.Img variant="top" src={Alarm2}  className="Alarm_Card_Img"/>
                <Card.Body>
                    <div className="icon_container">
                      <BsFillAwardFill />
                    </div>
                <Card.Title><h3>No Contracts Ever</h3></Card.Title>
                <Card.Text>
                   We don't need to lock you in with yearly contracts and fine print. We're confident once you try us you'll want  to stay
                </Card.Text>
                </Card.Body>
             
            </Card>
            <Card>
                <Card.Img variant="top" src={Alarm1} className="Alarm_Card_Img" />
                <Card.Body>
                <div className="icon_container">
                      <BsGem />
                </div>
                <Card.Title><h3>Financing Available</h3></Card.Title>
                <Card.Text>
                    We cater to every budget with financial options to fit your specific needs {' '}
                </Card.Text>
                </Card.Body>
             
            </Card>
            <Card>
                <Card.Img variant="top" src={Alarm3} className="Alarm_Card_Img" />
                <Card.Body>
                <div className="icon_container">
                      <BsBuilding /> 
                 </div>
                <Card.Title><h3>Remote Access</h3></Card.Title>
                <Card.Text>
                    Arm and Disarm your phone while you're away. Free App included with your system installation. 
                </Card.Text>
                </Card.Body>
             
            </Card>
            <Card>
                <Card.Img variant="top" src={Alarm6} className="Alarm_Card_Img" />
                <Card.Body>
                <div className="icon_container">
                      <BsFillGiftFill/> 
                 </div>
                <Card.Title><h3>Earn FREE Service</h3></Card.Title>
                <Card.Text>
                 Refer a friend to us. If they sign up, get a free month of service on us. There is no limit to how many referrals you send us.  
                </Card.Text>
                </Card.Body>
             
            </Card>
            </CardGroup>
            </Row>
            </Container>
            <Container>
            <h1 className="container-title">Safety, Savings, Service</h1>
                <Row className="row">
                    <Col className="Col">We are a licensed, authorized security systems and Lorex dealer. Southern Security Specialists, LLC ( now doing business as <bold><i>SERV</i></bold><span className="SERVZING_COLOR">ZING</span> ) is a DBA of Security Alarm Division, LLC. <br></br> <br></br> Primarily we are located in South Florida and surrounding cities. We currently are expanding to surrounding states and are actively seeking Investors.
                     </Col>
                    <Col className="Col"> We install and monitor high-quality alarm systems for Residential and Commercial clients. We provide the protection of having an alarm system for your home, business or even your apartment. <br></br> <br></br> While many large alarm companies do not offer their services to renters, we do! <br></br> Ask us about Alarm service for LIFE! </Col>
                </Row>
                <Fade>
                <Row className="row">
                    <Col className="Col">
                    <ListGroup>
                        <BsFillBrightnessAltHighFill style={{width: "100px", color: "crimson", height: "100px"}} />
                    <h2 className="List_title">The Security System you need</h2>
                        <ListGroup.Item>Smart Home Automation</ListGroup.Item>
                        <ListGroup.Item>Automatic Light Control</ListGroup.Item>
                        <ListGroup.Item>Remote Door Lock Access</ListGroup.Item>
                        <ListGroup.Item>Temperature/Thermostat Regulation</ListGroup.Item>
                        <ListGroup.Item>Arm & Disarm from Smartphone</ListGroup.Item>
                        <ListGroup.Item>Text Message Notifications</ListGroup.Item>
                        <ListGroup.Item>Cellular Communication</ListGroup.Item>
                        <ListGroup.Item>One month free alarm service with every referral</ListGroup.Item>
                    </ListGroup>
                    </Col>
                    <Col className="Col"> 
                        <img
                        className="d-block w-100"
                        src={Alarm4}
                        alt="Alarm systems near me"
                        />

                    </Col>
                </Row>
                </Fade>
             </Container>
             <HeroSection {...homeObjFive} />

            <div className="Customize_Title">
            <small className="small_text"> Smart Home Security Made Simple </small>
             <h1>Let's build your home security solution together</h1> 
            </div>
                <Container>
                    <Row className="row">
                        <div className="Customize_Alarm">
                          <Col lg={4}>  
                            <div className="icon_container">
                                <BsHouse />
                            </div>  
                            <p>
                            <h3 className="Step_Title"> Pick a Plan</h3>
                                We'll show you how to add extra equipment to a plan and clearly explain your costs.
                            </p>  
                          </Col>
                          <Col lg={4}>
                            <div className="icon_container">
                                <FaHandHoldingHeart /> 
                            </div>
                               <p>
                                   <h3 className="Step_Title"> Customize </h3>
                                   We'll show you how to add extra equipment to a plan and clearly explain your costs.
                              </p>
                          </Col>
                          <Col lg={4}>
                                <div className="icon_container">
                                    <BsPersonCheckFill/> 
                                </div>
                            
                                <p>
                                <h3 className="Step_Title"> Pro Installation </h3>
                                    We'll set your system up right and show you how it works. Guaranteed.
                               </p>
                           </Col> 
                              
                
                            </div>

                            <h1 className="Call_Us"> Call to secure your home or business today <br>
                            </br><a href="tel:786-287-3326">(786) 287-3326 </a> </h1>
                        
                        </Row>
                    </Container>
   </div>
      
    )
}

export default Alarms
