import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    console.log(cart);
    return (
        <div>
             <div className="row">
                    <div className="products-container col-md-8">
                       {cart.map(item=><ReviewItems item={item}></ReviewItems>)}
                    </div>
                    <div className="cart-container col-md-4 order-1 order-md-2">
                        <div className='sticky-item'>
                            <Cart cart={cart}></Cart>
                        </div>  
                    </div>  
             </div>
        </div>
    );
};

export default OrderReview;