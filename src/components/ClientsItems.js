import React from 'react';
import man from "../img/clients/man.png";
import girl from "../img/clients/girl.png";
import juice from "../img/clients/juice.png";
import man2 from "../img/clients/manBS.png";
import man3 from "../img/clients/man3.png";
import popjam from "../img/clients/popjam.png";

const ClientsItems = () => {
    const items = [
        {src: man, name: 'Liam Payne', classes: 'item'},
        {src: juice, name: 'Juice Burst', classes: 'item down'},
        {src: girl, name: 'Rita Ora', classes: 'item'},
        {src: popjam, name: 'Popjam', classes: 'item'},
        {src: man2, name: 'Jonas Blue', classes: 'item down'},
        {src: man3, name: 'Logan Paul', classes: 'item'},
        {src: juice, name: 'Juice Burst', classes: 'item'},
        {src: girl, name: 'Rita Ora', classes: 'item down'},
        {src: man, name: 'Liam Payne', classes: 'item'},
    ]
    return (
        <>
            {items.map((item, index) => <div key={index} className={item.classes}>
                <img src={item.src} alt=""/>
                <span>{item.name}</span>
            </div>)}

        </>
    );
};

export default ClientsItems;
