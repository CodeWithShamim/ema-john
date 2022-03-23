import React, {useEffect, useState} from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import {addToDb} from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[]);


    const [cart, setCart] = useState([]);
    const addToCart = (product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
        
    }
    // console.log(cart);

    
    return (
        <div className='shop-container p-4 row'>
            <div className="products-container col-md-8 order-2 order-md-1">
                <div className='row gy-5'>
                     {products.map(product=><Product key={product.id} product={product} addToCart={addToCart}></Product>)}
                </div>
            </div>
            <div className="cart-container col-md-4 order-1 order-md-2">
                <div className="sticky-item">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;