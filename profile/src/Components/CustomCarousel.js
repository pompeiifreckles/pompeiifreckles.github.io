import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import ilugd from '../assets/carousel/ILUG_D.jpg'
import bamboo_hut from '../assets/carousel/bamboo_hut.jpg'
import alias from '../assets/carousel/alias.jpg'

function CustomCarousel() {
    return (
        <Row style={carouselStyle}>
        <Col xl={7} md={10} xs={12} style={{padding: 0}}>
        <Carousel >
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
        </Col>
        </Row>
    )
}

const carouselStyle = {
    justifyContent: 'center', marginBottom: '100px'
}

export default CustomCarousel;