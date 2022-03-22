import React from 'react';
import './Product.css'
// font awesome icon  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {img,name,price,seller,ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <p className='product-price'>Price: ${price}</p>  
            <div className='product-info'> 
                <p>Seller: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button className='cartButton' onClick={()=>props.addToCart(props.product)}>
                <p>Add to Cart {<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>}</p>
                
            </button>
        </div>
    );
};

export default Product;