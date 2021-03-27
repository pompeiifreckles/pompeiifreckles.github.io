import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import animefx from '../assets/projects/animefx.svg'
import music_recommendation from '../assets/projects/song_recommendation.svg'

import '../styles/HomeScreen.css'

function CustomCards() {
    return (
        <Row style={styles.row}>
        <Col>
        <Card 
        // bsPrefix='customCard'
        style={styles.card.style}
        // bg={'dark'}
        text='light'
        >
        <Card.Img variant="top" src={music_recommendation} />
        <Card.Body>
            <Card.Title><h3 style={styles.card.title}>Card Title</h3></Card.Title>
            <Card.Text>
            <p style={styles.card.text}>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </p>
            </Card.Text>
        </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card 
        // bsPrefix='customCard'
        style={styles.card.style}
        // bg={'dark'}
        text='light'
        >
        <Card.Img variant="top" src={animefx}  />
        <Card.Body>
            <Card.Title><h3 style={styles.card.title}>AnimeFX (Active)</h3></Card.Title>
            <Card.Text>
            <p style={styles.card.text}>
            AnimeFX is anime streaming service, serving videos over hls and amazon's CDN 
            </p>
            </Card.Text>
        </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card 
        // bsPrefix='customCard'
        style={styles.card.style}
        // bg={'dark'}
        text='light'
        >
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title><h3 style={styles.card.title}>Card Title</h3></Card.Title>
            <Card.Text>
            <p style={styles.card.text}>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </p>
            </Card.Text>
        </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card 
        // bsPrefix='customCard'
        style={styles.card.style}
        // bg={'dark'}
        text='light'
        >
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title><h3 style={styles.card.title}>Card Title</h3></Card.Title>
            <Card.Text>
            <p style={styles.card.text}>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </p>
            </Card.Text>
        </Card.Body>
        </Card>
        </Col>

        </Row>
    )
}

const styles = {
    card: {
        style: {
            width: '18rem', minWidth: '10rem', backgroundColor: '#303030', 
            margin: '20px auto', padding: 15, borderRadius: 15, borderColor: 'aliceblue'
        },
        title: {
            fontFamily: 'Raleway', 
            fontWeight: 'bold'
        },
        text: {
            fontFamily: 'Raleway', 
            fontWeight: 'bold'
        },
    },
    row: { 
        width: '75%', margin: 'auto', 
        marginBottom: '5%', justifyContent: 'center' 
    }
}

export default CustomCards;