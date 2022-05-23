import React, { useState } from 'react';
import '../styles/Navigation.css'

function Navigation({ pageName, changePageName }) {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg w-100">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className={ pageName === 'AboutMe' ? 'nav-link active' : 'nav-link'} href="#about-me" onClick= {() => changePageName('AboutMe')}>About Me </a>
                </li>
                <li className="nav-item">
                    <a className={ pageName === 'Portfolio' ? 'nav-link active' : 'nav-link'} href="#portfolio" onClick= {() => changePageName('Portfolio')}>Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className={ pageName === 'ContactMe' ? 'nav-link active' : 'nav-link'} href="#contact-me" onClick= {() => changePageName('ContactMe')}>Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="Priyanka_Dhende.pdf"  target="_blank">Resume</a>
                </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;