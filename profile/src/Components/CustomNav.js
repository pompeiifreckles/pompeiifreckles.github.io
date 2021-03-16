import React from 'react'
import Nav from 'react-bootstrap/Nav'
// import { FaRegIdBadge } from 'react-icons/fa'

import {ActiveTab} from '../App'

function CustomNav() {
    // let activeTab = ActiveTab
    return (
        <ActiveTab.Consumer>
        { ({active, setActive}) => 
            <Nav variant="pills" activeKey="1">

            <div style={{display: 'flex', margin: 'auto', paddingBottom: '50px', overflow: 'hidden'}}>
            <Nav.Item>
                <Nav.Link 
                eventKey="2" 
                title="Item" 
                style={active === 'home' ? ({...navStyle, textDecoration: 'underline'}) : navStyle} 
                onClick={() => setActive('home')}>
                Home
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link 
                eventKey="2" 
                title="Item" 
                style={active === 'blogs' ? ({...navStyle, textDecoration: 'underline'}) : navStyle} 
                onClick={() => setActive('blogs')}>
                Blogs
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link 
                eventKey="2" 
                title="Item" 
                style={active === 'about' ? ({...navStyle, textDecoration: 'underline'}) : navStyle} 
                onClick={() => setActive('about')}>
                About
                </Nav.Link>
            </Nav.Item>

            </div>

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
    margin: '0 4vw 5vh'
    // color: 'rgba(255, 255, 255, 1)',
    
    // backgroundColor: 'green',
}

export default CustomNav