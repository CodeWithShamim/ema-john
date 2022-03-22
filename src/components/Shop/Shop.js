import React, {useEffect, useState} from 'react';
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
        <div className='shop-container'>
            <div className="products-container">
                {products.map(product=><Product key={product.id} product={product} addToCart={addToCart}></Product>)}
            </div>
            <div className="cart-container">
                <h2 className='title'>Order Summary</h2>
                <div>
                    <p>Selected Item: {cart.length}</p>
                    {/* <h3>Total Price: ${cart.price}</h3> */}
                </div>
            </div>
        </div>
    );
};

export default Shop;