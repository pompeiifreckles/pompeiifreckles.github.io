import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



import {ActiveTab} from '../App'

function CustomNav() {
    return (
        <ActiveTab.Consumer>
        { ({active, setActive}) => 
            <Nav as="ul">

            {/* <div style={{display: 'flex', margin: 'auto', paddingBottom: '50px'}}> */}

            <Row style={{justifyContent: 'center', flex: 1, marginBottom: '50px'}} >

            {(['home', 'blogs', 'about']).map(nav => (
                <Col lg={2} sm={3} xs={4}>
                <Nav.Item>
                    <Nav.Link 
                    as="li"
                    style={active === nav ? ({...navStyle, textDecoration: 'underline'}) : navStyle} 
                    onClick={() => setActive(nav)}>
                    {nav.charAt(0).toUpperCase()+nav.slice(1)}
                    </Nav.Link>
                </Nav.Item>
                </Col>
            ))}

            </Row>

            {/* </div> */}
            </Nav>
        }
        </ActiveTab.Consumer>
    )
}

const navStyle={
    fontFamily: 'Megrim, cursive',
    fontSize: '200%',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    // margin: '0 0 5vh',
    cursor: 'pointer',
    // color: 'rgba(255, 255, 255, 1)',
    
    // backgroundColor: 'green',
}

export default CustomNav