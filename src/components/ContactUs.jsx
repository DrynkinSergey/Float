import React from 'react';
import path from '../img/Path.png'
import torus from "../img/clients/torus.png";

const ContactUs = () => {
    return (
        <section className='ContactUs'>
            <img src={torus} alt=""/>

            <div className="container">
                <h1>Contact us <img style={{width:'40px'}} src={path} alt=""/>
                </h1>
            </div>
        </section>
    );
};

export default ContactUs;
