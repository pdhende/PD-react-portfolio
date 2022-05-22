import React, { useState } from 'react';
import '../styles/Navigation.css'

function Navigation() {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg w-100">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#about-me">About Me </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#Work">Work</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact-me">Contact</a>
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