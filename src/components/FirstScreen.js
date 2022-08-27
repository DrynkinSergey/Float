import React from 'react';
import headphone from "../img/firstScreen/headphone.png";
import camera from "../img/firstScreen/camera.png";
import youtube from "../img/firstScreen/ytube.png";
import donut from "../img/firstScreen/donut.png";
import note from "../img/firstScreen/note2.png";
import Header from "./Header";
import letter from "../img/lettering.png";

const FirstScreen = () => {
    return (
        <section className='firstWrapper'>
            <div className='firstScreen bgImage'>
                <img src={headphone} alt=""/>
                <img src={camera} alt=""/>
                <img src={youtube} alt=""/>
                <img src={donut} alt=""/>
                <img src={note} alt=""/>
                <Header color={'transparent'}/>
                <div className="firstScreen_content">
                    <span style={{textTransform: 'uppercase'}}>practice by SZE</span>
                    <h1>creative</h1>
                    <img src={letter} alt=""/>
                    <div className='firstScreen_viewers'>
                        <span style={{color:'#643C5A'}}>our content has reached</span>
                        <span style={{color:'white'}}>1 000 030 021</span>
                        <span style={{color:'white'}}>VIEWERS</span>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default FirstScreen;
