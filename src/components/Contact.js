import React, { useState } from 'react';
import '../styles/MainPage.css'


function Contact() {
    return (
        <form className='main-section'>
            <div className="form-group">
                <label for="formGroupExampleInput">Name: </label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name"/>
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2">Email address: </label>
                <input type="email" className="form-control" id="formGroupExampleInput2" placeholder="name@test.com"/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Message: </label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Contact;