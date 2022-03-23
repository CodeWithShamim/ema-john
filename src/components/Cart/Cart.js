import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <h2 className='title'>Order Summary</h2>
            <p>Selected Item: {cart.length}</p>
            {/* <h3>Total Price: ${cart.price}</h3> */}
        </div>
    );
};

export default Cart;