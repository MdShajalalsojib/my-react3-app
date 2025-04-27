import React from 'react';
import './Bottle.css'

const Bottle = ({bottle, handleAddToCart}) => {

    const { id, material, brand, priceUSD } = bottle;
    

    // console.log(bottle);
    return (
        <div className='card'>
            <h3>Name : {brand}</h3>
            <h4>Material: {material}</h4>
            <h3>ID : {id}</h3>
            <p>PriceUSD : {priceUSD}</p>

            <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
            
        </div>
    );
};

export default Bottle;