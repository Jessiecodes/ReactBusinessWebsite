import React from 'react'
import './Carousel.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { BsStarFill } from "react-icons/bs";


function CarouselTestimonials() {
    return (
    <div className="Testimonials">
        <h1 className="carousel_title">What our Customers are saying.. </h1>
        <div className="Google_Review_Link">
            <a target="_blank" href="https://www.google.com/search?q=southern+security+specialists+pembroke+pines&sxsrf=ALeKk007pJaPBGkcsKy2b2MldJuCml_n3g%3A1619120163408&source=hp&ei=I9CBYNvcFeqHgge3po64Cg&iflsig=AINFCbYAAAAAYIHeM7mEsCcucR_x-jGCmNaISYygNqBN&oq=souther&gs_lcp=Cgdnd3Mtd2l6EAMYADIECCMQJzIECC4QQzIHCAAQhwIQFDIICC4QxwEQrwEyDQguEIcCEMcBEK8BEBQyAgguMgIIADICCAAyAgguMgIIADoFCAAQkQI6CAgAELEDEIMBOgsILhCxAxDHARCjAjoFCAAQsQM6DgguELEDEIMBEMcBEKMCOgoIABCxAxCDARBDOgcIABCxAxBDOggILhCxAxCDAToECAAQQzoHCC4QsQMQQzoHCAAQyQMQQ1CnAVjbBGD6CmgAcAB4AIABiQGIAf8GkgEDMC43mAEAoAEBqgEHZ3dzLXdpeg&sclient=gws-wiz#lrd=0x88d9a9e4e1a3c805:0xe568052839b509d1,3,,,">
            Leave Us A Review! </a>
        </div>
          <Carousel className="carousel_wrapper">
            <Carousel.Item interval={1000}>
            <Card>
                <Card.Header className="Card_Header">Testimonial</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        Dean is the best security specialist in South Florida by far. Highly recommend and endorsed. Great company and even a greater person{' '}
                    </p>
                    <footer className="blockquote-footer">
                    Rafael Benitez <cite title="Source Title">Source Title</cite>
                    <div className="stars_group">
                        <div>
                        <BsStarFill />
                        </div>
                        <div>
                        <BsStarFill />
                        </div>
                        <div>
                        <BsStarFill />
                        </div>
                        <div>
                        <BsStarFill />
                        </div>
                        <div>
                        <BsStarFill />
                        </div>
                    </div>
                    </footer>
                    </blockquote>
                </Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item interval={500}>
            <Card>
                <Card.Header className="Card_Header">Testimonial </Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        Super affordable and great service. Responds to texts. Way cheaper than ADT which he used to work for before he went on his own a long time ago.... I've been using him for about 10 years. Dean did my house and a few friends and neighbors. Also helped me with emergency hurricane boards a few years ago then helped my older neighbor for free.{' '}
                    </p>
                    <footer className="blockquote-footer">
                    Tom Alba <cite title="Source Title">Customer</cite>
                    <div className="stars_group">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                    </div>
                    </footer>
                    </blockquote>
                </Card.Body>
                </Card>
          
            </Carousel.Item>
            <Carousel.Item>
            <Card>
                <Card.Header className="Card_Header">Testimonial </Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        Servzing installed my camera system at my house back in 2018 and they are still working perfectly, and I have had no problems with that system since. He is professional, experienced and an overall great person. If you are looking for a security system for your home or business I highly recommend Dean Martin from Southern Security.{' '}
                    </p>
                    <footer className="blockquote-footer">
                       Jessica Leverett <cite title="Source Title"> Customer/ Employee</cite>
                    <div className="stars_group">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                    </div>
                    </footer>
                    </blockquote>
                </Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item>
            <Card>
                <Card.Header className="Card_Header">Testimonial </Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        Dean is the best! Tells the facts, doesn’t push for a hard sell, completely honest and trustworthy.{' '}
                    </p>
                    <footer className="blockquote-footer">
                    Jennifer Antecol <cite title="Source Title"> Customer/ Employee</cite>
                    <div className="stars_group">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                    </div>
                    </footer>
                    </blockquote>
                </Card.Body>
                </Card>
            </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselTestimonials
