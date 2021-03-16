import React from 'react';
import Particles from "react-tsparticles";
import Fade from 'react-bootstrap/Fade'

import particlesOptions from "./particles.json";
import CustomNav from './Components/CustomNav'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import BlogsScreen from './screens/BlogsScreen'

export const ActiveTab = React.createContext()

function App() {
    const [active, setActive] = React.useState('home')
    return (
        <div>
            <Particles options={particlesOptions}/>
            <h1 style={{
            color: "white",
            textAlign: "center",
            fontFamily: 'Megrim, cursive',
            fontSize: "90px",
            margin: "45px",
            }}>
                Siddharth Bhardwaj
            </h1>

            <ActiveTab.Provider value={{active: active, setActive}}>
            <CustomNav />
            </ActiveTab.Provider>

            {active === 'home' ? <HomeScreen /> : null}
            {active === 'about' ? <AboutScreen /> : null}
            {active === 'blogs' ? <BlogsScreen /> : null}

            {/* <Fade in={(active==='home')} appear={active==='home'} timeout={5000}><HomeScreen /></Fade> */}

        </div>
    );
}



export default App;