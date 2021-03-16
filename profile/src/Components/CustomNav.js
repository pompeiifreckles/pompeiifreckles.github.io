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

            <div style={{display: 'flex', margin: 'auto', paddingBottom: '50px'}}>
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
                About Me
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
    fontSize: '40px',
    color: 'white',
    fontWeight: 'bold',
    marginLeft: '40px',
    marginRight: '40px',
    // color: 'rgba(255, 255, 255, 1)',
    
    // backgroundColor: 'green',
}

export default CustomNav