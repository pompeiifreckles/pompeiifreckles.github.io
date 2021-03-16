import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

function CustomBlog(props) {
    return (
        <React.Fragment>
            <Accordion style={{margin: '3vh 0'}}>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                <h2>{props.title}</h2>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body>{props.children}</Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
        </React.Fragment>
    )
}

export default CustomBlog