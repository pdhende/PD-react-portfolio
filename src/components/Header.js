import React, { useState } from 'react';
import '../styles/Header.css';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Navigation from './Navigation';
import Resume from './Resume';

function Header() {

    const [pageName, setPageName] = useState('AboutMe');

    const displayPage = () => {
        if (pageName === 'AboutMe') {
            return <AboutMe />
        }

        if (pageName === 'Portfolio') {
            return <Portfolio />
        }

        if (pageName === 'ContactMe') {
            return <Contact />
        }

        if (pageName === 'Resume') {
            return <Resume />
        }
        
    };

    const changePageName = (page) => setPageName(page);

    return (
        <div> 
             {/* className="jumbotron jumbotron-fluid portfolio-img" */}
            <div className="custom-row row">
                <div className='col-md-6'>
                    <h1 className="display-5">Priyanka Dhende</h1>
                    <p className="lead portfolio-intro">Full-Stack Web Developer</p>
                </div>
                <div className='col-md-6'>
                    <Navigation pageName={pageName} changePageName={changePageName} />
                </div>
            </div>
            <div>
                {displayPage()}
            </div>
        </div>
    );
}

export default Header;