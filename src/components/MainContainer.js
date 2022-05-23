import React from 'react';
import Header from './Header';
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
