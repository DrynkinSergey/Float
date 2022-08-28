import React from 'react';
import Header from "./Header";
import pic1 from '../img/ourTeam/Bitmap.png'
import pic2 from '../img/ourTeam/Bailey.png'
import pic3 from '../img/ourTeam/Gabbie.png'
import pic4 from '../img/ourTeam/Maggie.png'
import note from '../img/firstScreen/note.png'
import ball from '../img/ball.png'

const OurTeam = () => {
    return (
        <section className='OurTeam'>
            <div className="container">
                <Header color={'white'}/>
                <div >
                    <h1>Our Team</h1>
                </div>
                <img className='ball' src={ball} alt=""/>
                <img className='note' src={note} alt=""/>
                <div className="slider">
                    <button className='prevBtn' >prev</button>
                    <button className='nextBtn'>next</button>
                    <div  className="slider_item">
                        <img src={pic1} alt=""/>
                        <span className='slider_item_name'>Thomas French</span>
                        <span className='slider_item_profession'>Video maker</span>
                    </div>
                    <div className="slider_item">
                        <img src={pic2} alt=""/>
                        <span className='slider_item_name'>Thomas French</span>
                        <span className='slider_item_profession'>Video maker</span>
                    </div>
                    <div className="slider_item">
                        <img src={pic3} alt=""/>
                        <span className='slider_item_name'>Thomas French</span>
                        <span className='slider_item_profession'>Video maker</span>
                    </div>
                    <div className="slider_item">
                        <img src={pic4} alt=""/>
                        <span className='slider_item_name'>Thomas French</span>
                        <span className='slider_item_profession'>Video maker</span>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default OurTeam;
