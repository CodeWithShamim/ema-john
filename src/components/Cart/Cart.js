import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
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
        <div className='cart'>
            <h2 className='title'>Order Summary</h2>
            <div>
                <p>Selected Item: {quantity}</p>
                <p>Total Price: {totalPrice}</p>
                <p>Total Shipping charge: {shippingCharge}</p>
                <p>Tax: {tax}</p>
                <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
            </div>

        </div>
    );
};

export default Cart;