import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

import {blogs} from '../Blogs/Blogs' 


function BlogsScreen() {
    return (
        <div style={styles.containerStyle}>

        <Container style={{display: 'flex', backgroundColor: '', justifyContent:'center', flexDirection: 'column'}}>


        {blogs.map(blog => (
            <Card class="card" style={styles.card.style}>
            <Row style={{backgroundColor: '', display: 'flex', flexDirection: 'row', width: 'auto',}}>
    
                <Col xl={4} lg={4} md={12} sm={12} xs={12}>
                <Card.Img variant="top" src={blog.img} style={styles.card.image}/>
                </Col>
    
                <Col xl={8} lg={8} md={12} sm={12} xs={12}>
                <Card.Body style={styles.card.body}>
                    <Card.Title style={styles.card.title}>{blog.title}</Card.Title>
                    <Card.Text style={styles.card.text}>
                    {blog.body}
                    </Card.Text>
                    <Button style={styles.card.button} variant="light" onClick={() => { window.open(blog.link) }}> 
                        Read
                    </Button>
                </Card.Body>
                </Col>
    
            </Row>
            </Card>
        ))}


        </Container>

        </div>
    )
}



const styles = {
    containerStyle: {
        width: '50%', 
        margin: 'auto', 
        // backgroundColor: 'orange',
        display: 'flex',
        flexDirection: 'column',
        // gap: '7vh'
        // justifyContent: 'space-between',
    }, 

    card : {
        style: {
            display: 'flex', backgroundColor: '#303030', borderColor: 'aliceblue', 
            borderWidth: 'thin', borderRadius: 15, padding: '20px', margin: '0 0 2em'
        },
        image: {
            height: '100%', width: '100%', borderRadius: 10,
        },
        title: {
            textAlign: 'left', fontSize: '1.5em', fontWeight: 'bold', fontFamily: 'Raleway',
            color: 'aliceblue', paddingTop: '0.5em', height: 'auto'
        },
        body: {
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between', 
            alignItems: 'flex-start', height: '100%', width: '100%',
            fontSize: '1.1em', textAlign: 'left', padding: 0
        },
        text: {
            fontSize: '1.1em', color: 'lightgrey', fontFamily: 'Raleway'
        },
        button: {
            display: 'flex', borderRadius: 20,
        }
    },
}

export default BlogsScreen