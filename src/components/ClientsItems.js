import React from 'react';
import man from "../img/clients/man.png";
import girl from "../img/clients/girl.png";

const ClientsItems = () => {
    const items = [
        {src: man, name: 'Liam Payne', classes: 'item'},
        {src: girl, name: 'Liam Payne', classes: 'item down'},
        {src: man, name: 'Liam Payne', classes: 'item'},
        {src: girl, name: 'Liam Payne', classes: 'item'},
        {src: man, name: 'Liam Payne', classes: 'item down'},
        {src: girl, name: 'Liam Payne', classes: 'item'},
        {src: man, name: 'Liam Payne', classes: 'item'},
        {src: girl, name: 'Liam Payne', classes: 'item down'},
        {src: man, name: 'Liam Payne', classes: 'item'},
    ]
    return (
        <>
            {items.map((item, index) => <div key={index} className={item.classes}>
                <img src={item.src} alt=""/>
                <h2>{item.name}</h2>
            </div>)}

        </>
    );
};

export default ClientsItems;
