import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img,name,price,seller,ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <p className='product-price'>Price: {price}</p>
            <div className='product-info'>
                <p>Seller: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
        </div>
    );
};

export default Product;