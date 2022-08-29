import React, {useEffect} from 'react';
import Header from "./Header";
import Tilt from 'react-vanilla-tilt'


import headphone from "../img/firstScreen/headphone.png";
import camera from "../img/firstScreen/camera.png";
import youtube from "../img/firstScreen/ytube.png";
import donut from "../img/firstScreen/donut.png";
import movie from "../img/firstScreen/movie.png";
import note from "../img/firstScreen/note2.png";
import torus from "../img/firstScreen/torus2.png";
import heart from "../img/firstScreen/heart.png";
import letter from "../img/lettering.png";
import light from "../img/firstScreen/light.png";
import light2 from "../img/firstScreen/light2.png";

const FirstScreen = () => {
    useEffect(() => {
        const items =document.querySelectorAll(".bgAnimate");
        items.forEach(item=> {
            const randY = Math.floor(Math.random() * (100 - (-100)) + (-100))
            const randX = Math.floor(Math.random() * (100 - (-100)) + (-100))
            item.animate([
                { transform: 'translate3D(0, 0, 0)' },
                { transform: `translate3D(${randX}px, ${randY}px , 0)` }
            ], {
                duration: 6000,
                iterations: Infinity,
                direction: 'alternate-reverse'
            })
        })
    }, []);

    return (
        <section className='firstWrapper'>
            <div className='firstScreen bgImage'>
                <img className='bgAnimate' src={headphone} alt=""/>
                <img className='bgAnimate' src={camera} alt=""/>
                <img className='bgAnimate' src={youtube} alt=""/>
                <img className='bgAnimate' src={donut} alt=""/>
                <img className='bgAnimate' src={note} alt=""/>
                <img className='bgAnimate' src={movie} alt=""/>
                <img className='bgAnimate' src={torus} alt=""/>
                <img className='bgAnimate' src={heart} alt=""/>
                <img className='bgAnimate' src={light} alt=""/>
                <img className='bgAnimate' src={light2} alt=""/>
                <Header color={'transparent'}/>

                <div className="firstScreen_content">
                    <Tilt className='tilt' style={{
                        width: '100%',
                        height: '100vh',
                        display: 'flex',
                        bottom:'-10%',
                        position:'absolute',
                        boxShadow:'10px 10px 5px 0px rgba(0,0,0,0)',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent:'center',
                        willChange: 'transform',
                        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
                    }}>
                        <span style={{textTransform: 'uppercase'}}>practice by SZE</span>
                        <h1>creative</h1>
                        <img className='imgLetter'  src={letter} alt=""/>

                    </Tilt>
                    <div className='firstScreen_viewers'>
                        <span style={{color: '#643C5A'}}>our content has reached</span>
                        <span style={{color: 'white'}}>1 000 030 021</span>
                        <span style={{color: 'white'}}>VIEWERS</span>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default FirstScreen;
