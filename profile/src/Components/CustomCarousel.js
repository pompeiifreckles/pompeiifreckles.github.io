import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import moon from '../assets/moon.jpg'
import boy from '../assets/boy.jpg'
import street from '../assets/street.jpg'

import ilugd from '../assets/carousel/ILUG_D.jpg'
import bamboo_hut from '../assets/carousel/bamboo_hut.jpg'
import alias from '../assets/carousel/alias.jpg'
// import { Jumbotron } from 'react-bootstrap'

function CustomCarousel() {
    return (
        <div style={carouselStyle}>
        {/* <Jumbotron fluid style={{backgroundColor: '#7C8483'}}> */}
        <Carousel style={{margin: 'auto 0'}}>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={ilugd}
            style={{width: '50%', height: '30%'}}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>Indian Linux User Group (ILUG-D)</h3>
            <p>Raspberry Pi Jam and hacking RF with breadboard</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={bamboo_hut}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Hardware Hackers Delhi</h3>
            <p>Arduino Fest and RISC systems</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={alias}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>ALiAS</h3>
            <p>Well nothing is going on here, move on!</p>
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
    margin: '0 auto 15vh',
    // border: 'solid',
    // borderWidth: '20px',
    // borderColor: 'grey'
}

export default CustomCarousel;