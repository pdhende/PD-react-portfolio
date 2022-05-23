import React from 'react';
import Avatar from '../assets/Avatar.png'
import '../styles/MainPage.css'

export default function AboutMe() {
  return (
    <div className='main-section'>
      <h1>About Me</h1>
      <img src={Avatar} className='avatar-icon'/>
      <p>
      I am a software professional with around 5 years of work experience in developing Siebel CRM applications. I wanted to use my imagination and creativity to build versatile web applications. So I took up the challenge to hone my skills and build user friendly and functional portals. My work is a reflection of my expertise in HTML, CSS, Javascript, Bootstrap, API's and Node.js. When I am not building cool applications, I spend my time with family or exploring my hobbies
      </p>
    </div>
  );
}