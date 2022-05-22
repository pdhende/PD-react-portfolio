import React, { useState } from 'react';
import '../styles/Header.css'

function Header() {
    return (
        <div className="jumbotron jumbotron-fluid portfolio-img">
            <div className="container">
                <h1 className="display-5">Priyanka Dhende</h1>
                <p className="lead portfolio-intro">Full-Stack Web Developer</p>
            </div>
        </div>
    );
}

export default Header;