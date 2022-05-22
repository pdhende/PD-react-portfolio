import React, { useState } from 'react';
import '../styles/Header.css'
import Navigation from './Navigation';

function Header() {
    return (
        <div className="jumbotron jumbotron-fluid portfolio-img">
            <div className="container row">
                <div className='col-md-6'>
                    <h1 className="display-5">Priyanka Dhende</h1>
                    <p className="lead portfolio-intro">Full-Stack Web Developer</p>
                </div>
                <div className='col-md-6'>
                    <Navigation />
                </div>
            </div>
        </div>
    );
}

export default Header;