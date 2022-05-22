import React, { useState } from 'react';
import '../styles/Footer.css'
import GithubIcon from '../assets/Github.png';
import LinkedInIcon from '../assets/LinkedIn.png';
import StackOverIcon from '../assets/StackOverflow.png';

function Footer() {
    return (
        <div className='footer'>
            <img src={GithubIcon} className="icons"/>
            <img src={LinkedInIcon} className="icons"/>
            <img src={StackOverIcon} className="icons"/>
        </div>
    );
}

export default Footer;