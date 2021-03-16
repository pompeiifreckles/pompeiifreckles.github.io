import React from 'react'
import Image from 'react-bootstrap/Image'

import dog from '../assets/dog.jpg'


function AboutScreen() {

    
      

    return(
        <div style={{width: '45%', margin: 'auto'}}>
            <Image src={dog} roundedCircle style={{
            height: '200px', 
            width: '200px', 
            marginLeft: '50%', 
            transform: 'translate(-50%, 0)',
            marginBottom: '50px',
            }}/>
            
            {/* <h2 style={{fontSize: '50px', color: 'white', textAlign: 'center', fontFamily: 'Raleway', padding: '40px'}}>Hey there</h2> */}
            <p style={styles.paragraph}>
                Hello I'm <span style={{color: 'hotpink'}}>Sid</span>. A developer who likes working on challenges. My interests lie in embedded systems and I like working with native languages.<br/>
                I have experience in creating interactive interfaces using React and have full stack developer experience.
            </p>
            <p style={styles.paragraph}>
                I am also an open-source enthusiast and volunteer in open-source meetups in my city.
            </p>
        </div>
    )
}

const styles = {
    paragraph: {
        fontSize: '30px', 
        color: 'white', 
        fontFamily: 'Raleway', 
        justifyContent: 'center'
    },
}

export default AboutScreen