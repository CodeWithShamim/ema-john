import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import {removeFromDb} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

const OrderReview=() => {
    const [products,setProducts]=useProducts();
    const [cart,setCart]=useCart(products);
    // console.log(cart);

    const removeItem = (id)=>{
        console.log(id);
        const findProduct = cart.filter(item=> item.id !== id);
        setCart(findProduct);
        // remove from local Storage
        removeFromDb(id);
    };

    return (
        <div>
            <div className="row">
                <div className="products-container col-md-8">
                    {cart.map(item => <ReviewItems key={item.id} item={item} removeItem={removeItem}></ReviewItems>)}
                </div>
                <div className="cart-container col-md-4 order-1 order-md-2">
                    <div className='sticky-item'>
                        <Cart cart={cart}></Cart>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;