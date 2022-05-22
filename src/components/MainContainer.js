import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Project from './Project';

function MainContainer() {
    return (
        <div>
            <Navigation />
            <Header />
        </div>
    );
}

export default MainContainer;
