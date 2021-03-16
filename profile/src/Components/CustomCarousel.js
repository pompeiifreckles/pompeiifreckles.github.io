import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import moon from '../assets/moon.jpg'
import boy from '../assets/boy.jpg'
import street from '../assets/street.jpg'
// import { Jumbotron } from 'react-bootstrap'

function CustomCarousel() {
    return (
        <div style={carouselStyle}>
        {/* <Jumbotron fluid style={{backgroundColor: '#7C8483'}}> */}
        <Carousel style={{margin: 'auto'}}>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={moon}
            // style={{width: '500px', height: '300px'}}
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
            src={boy}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={street}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        {/* </Jumbotron> */}
        </div>
    )
}

const carouselStyle = {
    width: window.screen.width/1.8,
    height: window.screen.height/1.8,
    margin: 'auto',
    marginBottom: '5%',
    // border: 'solid',
    // borderWidth: '20px',
    // borderColor: 'grey'
}

export default CustomCarousel;