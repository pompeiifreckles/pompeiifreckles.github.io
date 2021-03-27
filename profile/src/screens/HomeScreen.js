import React from 'react'
import Image from 'react-bootstrap/Image'
import Toast from 'react-bootstrap/Toast'
import { FaGithubAlt, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa'
import CustomCards from '../Components/CustomCards'
import CustomCarousel from '../Components/CustomCarousel'

import dog from '../assets/dog.jpg'


function HomeScreen() {
    const [show, setShow] = React.useState(false)
    return (
        <>

        <CustomCarousel />
        <CustomCards />

        <div style={{
            borderRadius: '100px',
            overflow: 'hidden',
            margin: 'auto',
            // backgroundColor: 'orange'    
        }}>
        <Image src={dog} roundedCircle style={{
            height: '200px', 
            width: '200px', 
            marginLeft: '50%', 
            transform: 'translate(-50%, 0)',
            margin: '10vh 50vw',
        }}/>
        </div>

        {show === true ? (
            <Toast onClose={() => setShow(false)} show={show} delay={3000} style={{position: 'absolute', marginLeft: '54%'}} autohide>
            <Toast.Header>
                <strong className="mr-auto">e-mail copied!</strong>
            </Toast.Header>
            {/* <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body> */}
            </Toast>
        ) : <></>}

        <div style={{display: 'flex', paddingTop: '2vh', marginBottom: '3vh', marginLeft: '50vw', marginTop: '1.5vh', transform: 'translate(-50%, 0)', justifyContent: 'center', gap: '1em' }}>
            <a href="https://github.com/pompeiifreckles/"><FaGithubAlt style={{color: 'aliceblue', cursor: 'pointer'}} size="50" /></a>
            <FaLinkedinIn style={{color: 'aliceblue', cursor: 'pointer'}} size="50" />
            <a href="https://twitter.com/Pompeiifreckles"><FaTwitter style={{color: 'aliceblue', cursor: 'pointer'}} size="50" /></a>
            <FaEnvelope style={{color: 'aliceblue', cursor: 'pointer'}} size="50" onClick={() => {
                setShow(true);   
                navigator.clipboard.writeText("sidhu97ss@gmail.com")
            }} />

        </div>

        </>
    )
}

export default HomeScreen