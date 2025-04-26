import React from 'react';
import './Bottle.css'

const Bottle = ({bottle}) => {

    const { id, material, brand } = bottle;
    

    // console.log(bottle);
    return (
        <div className='card'>
            <h3>Name : {brand}</h3>
            <h4>Material: {material}</h4>
            <h3>ID : {id}</h3>
            
        </div>
    );
};

export default Bottle;