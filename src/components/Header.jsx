import React from 'react';
import contactBtn from "../img/contactBtn.png";

const Header = ( {color}) => {
    return (
        <header className='container'>
            <div className="logo">floaat</div>
            <div className='contact'>contact us
                <button style={{background:color}}>
                    <img src={contactBtn} alt=""/>
                </button>
            </div>
        </header>
    );
};

export default Header;
