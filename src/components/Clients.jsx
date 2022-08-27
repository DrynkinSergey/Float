import React from 'react';
import Header from "./Header";
import torus from "../img/clients/torus.png";
import ytClient from "../img/clients/ytClient.png";
import sphere from "../img/clients/sphere.png";
import ClientsItems from "./ClientsItems";

const Clients = () => {
    return (
        <section className='clients'>
            <div className="container">
                <Header color={'white'}/>
                <div className='clients_wrapper'>
                    <div className="left">
                        <h1>150+
                            CLIENTS</h1>
                        <p>We work with some of the biggest gaming entertainers & world-renowned organisations.
                        </p>
                        <a href="#">
                            view all
                        </a>
                    </div>
                    <div className="right">
                        <img style={{position:'absolute', left:'26%', top:'2%'}} src={torus} alt=""/>
                        <img style={{position:'absolute', right:'1%', top:'40%'}} src={ytClient} alt=""/>
                        <img style={{position:'absolute', left:'31%', bottom:'2%'}} src={sphere} alt=""/>
                        <ClientsItems/>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default Clients;
