import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'

const Cart = ({cart, children,clearCart}) => {
    // console.log(cart);

    let totalPrice = 0;
    let shippingCharge = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        totalPrice = totalPrice + product.price*product.quantity;
        shippingCharge = shippingCharge + product.shipping;
    }
    const tax = (totalPrice * 0.1).toFixed(2);
    const grandTotal = totalPrice + shippingCharge + parseFloat(tax);

    return (
        <div data-aos="zoom-in-up"
        data-aos-duration="3000"
        className='cart'>
            <h2 className='title'>Order Summary</h2>
            <div className='product-info'>
                <p>Selected Item: {quantity}</p>
                <p>Total Price: {totalPrice}</p>
                <p>Total Shipping charge: {shippingCharge}</p>
                <p>Tax: {tax}</p>
                <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
                {/* clear cart  */}
                <button onClick={clearCart} className='border-0 px-5 py-2 fw-bold text-white bg-danger rounded m-3'>Clear cart <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
                    
                {children}
            </div>

        </div>
    );
};

export default Cart;