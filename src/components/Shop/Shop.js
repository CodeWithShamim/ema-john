import React, {useEffect, useState} from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
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
        
    }
    console.log(cart);

    
    return (
        <div className='shop-container row'>
            <div className="products-container col-md-8">
                <div className='row gy-5'>
                     {products.map(product=><Product key={product.id} product={product} addToCart={addToCart}></Product>)}
                </div>
            </div>
            <div className="cart-container col-md-4">
                <div className="sticky-item">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;