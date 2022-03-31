import React from 'react';

const ReviewItems = ({item}) => {
    const {img, price, shipping, quantity} = item;
    console.log(item);
    return (
        <div className='container'>
            <img src={img} className='img-fluid' alt="" />
        </div>
    );
};

export default ReviewItems;