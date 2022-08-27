import React from 'react';
import contactBtn from "../img/contactBtn.png";

const Header = () => {
    return (
        <header className='container'>
            <div className="logo">floaat</div>
            <div className='contact'>contact us
                <img src={contactBtn} alt=""/>
            </div>
        </header>
    );
};

export default Header;
