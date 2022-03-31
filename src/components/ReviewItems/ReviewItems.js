import React from 'react';
import './ReviewItems.css'

const ReviewItems = ({item}) => {
    const {img, price, shipping, quantity} = item;
    console.log(item);
    return (
        <div className='container bg-light col-md-8 mt-4 rounded d-flex justify-content-evenly align-items-center'>
            <img id='custom-img' src={img} className='img-fluid' alt="" />
            <h1>{price}</h1>
            <h1>{shipping}</h1>
            <h1>{quantity}</h1>
            
        </div>
    );
};

export default ReviewItems;