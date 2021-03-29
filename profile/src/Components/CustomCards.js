import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {FaGithubAlt} from 'react-icons/fa'


import {projects} from '../Projects/projects'

import '../styles/HomeScreen.css'

function CustomCards() {
    return (
        <Row style={styles.row}>

        {projects.map(project => (
            <Col sm={12} md={6} lg={6} xl={3} >
            <Card 
            style={styles.card.style}
            text='light'
            >
            <Card.Img variant="top" src={project.image}  />
            <Card.Body>
                <Card.Title><h3 style={styles.card.title}>{project.title}</h3></Card.Title>
                <Card.Text>
                <p style={styles.card.text}>
                    {project.body}
                </p>
                </Card.Text>
                <Button variant="light" size="lg" style={styles.card.button} onClick={() => window.open(project.link)}> 
                    <FaGithubAlt size="30"/> 
                </Button>
            </Card.Body>
            </Card>
            </Col>
        ))}

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
        button: {
            borderRadius: 20,
        }
    },
    row: { 
        width: '80%', margin: 'auto', 
        marginBottom: '5%', justifyContent: 'center' 
    }
}

export default CustomCards;