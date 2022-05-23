import React, { useState } from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Footer from './Footer';
import '../styles/MainPage.css'


function MainContainer() {
    return (
        <div className='main-container' style={{ height: "100vh" }}>
            <Header />
            <Footer />
        </div>
    );
}

export default MainContainer;
