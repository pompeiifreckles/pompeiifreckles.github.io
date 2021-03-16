import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

function CustomCards() {
    return (
        <CardDeck style={{ width: '75%', margin: 'auto', marginBottom: '5%' }}>
        <Card 
        style={{ width: '18rem', backgroundColor: '#7C8483' }}
        // bg={'dark'}
        text={'light'}
        >
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title><h3 style={styles.cardTitle}>Card Title</h3></Card.Title>
            <Card.Text>
            <p style={styles.cardText}>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </p>
            </Card.Text>
        </Card.Body>
        </Card>

        <Card 
        style={{ width: '18rem', backgroundColor: '#7C8483' }}
        // bg={'dark'}
        text={'light'}
        >
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title><h3 style={styles.cardTitle}>Card Title</h3></Card.Title>
            <Card.Text>
            <p style={styles.cardText}>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </p>
            </Card.Text>
        </Card.Body>
        </Card>

        <Card 
        style={{ width: '18rem', backgroundColor: '#7C8483' }}
        // bg={'dark'}
        text={'light'}
        >
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title><h3 style={styles.cardTitle}>Card Title</h3></Card.Title>
            <Card.Text>
            <p style={styles.cardText}>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </p>
            </Card.Text>
        </Card.Body>
        </Card>

        <Card 
        style={{ width: '18rem', backgroundColor: '#7C8483' }}
        // bg={'dark'}
        text={'light'}
        >
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title><h3 style={styles.cardTitle}>Card Title</h3></Card.Title>
            <Card.Text>
            <p style={styles.cardText}>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </p>
            </Card.Text>
        </Card.Body>
        </Card>

        </CardDeck>
    )
}

const styles = {
    cardTitle: {
        fontFamily: 'Raleway', 
        fontWeight: 'bold'
    },
    cardText: {
        fontFamily: 'Raleway', 
        fontWeight: 'bold'
    },
}

export default CustomCards;