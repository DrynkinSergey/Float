import React from 'react';
import Header from "./Header";
import gear from '../img/weDo/gear.png'
import gear2 from '../img/weDo/gear_red.png'
import graph from '../img/weDo/graph.png'
import hp from '../img/weDo/hp.png'
import lupa from '../img/weDo/lupa.png'
import star from '../img/weDo/stars.png'
import movie from '../img/weDo/hlopushka_small.png'
import hpbig from '../img/weDo/img1.png'
import lupabig from '../img/weDo/img2.png'
import moviebig  from '../img/weDo/img3.png'
import graphbig from '../img/weDo/img4.png'
import starbig from '../img/weDo/img5.png'
import gearbig from '../img/weDo/img6.png'
const WeDo = () => {

    return (
        <section className='weDo'>
            <div className="container">
                <Header color={'transparent'}/>
                <div >
                    <h1>WE DO</h1>
                </div>
                <div className='weDo_wrapper'>
                    <ul>
                        <li className='active' onClick={(e)=>{
                            e.currentTarget.classList.toggle('active')
                        }}><img className='imgGear' src={gear2} alt=""/></li>
                        <li><img src={graph} alt=""/></li>
                        <li><img src={hp} alt=""/></li>
                        <li><img className='imgLupa' src={lupa} alt=""/></li>
                        <li><img src={star} alt=""/></li>
                        <li><img src={movie} alt=""/></li>
                    </ul>
                    <div className='weDo_img_right'>
                        <img src={gearbig} alt=""/>
                        <div>
                            <span>Channel Operation and Management
</span>
                            <a href="#">learn more</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WeDo;
