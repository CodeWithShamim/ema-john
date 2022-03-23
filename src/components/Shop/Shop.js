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
        <div className='shop-container row'>
            <div className="products-container col-md-9">
                <div className='row gy-5'>
                     {products.map(product=><Product key={product.id} product={product} addToCart={addToCart}></Product>)}
                </div>
            </div>
            <div className="cart-container col-md-3">
               <div className="row">
                   <div className="col-md-10">
                        <h2 className='title'>Order Summary</h2>
                        <div>
                            <p>Selected Item: {cart.length}</p>
                            {/* <h3>Total Price: ${cart.price}</h3> */}
                        </div>
                   </div>
               </div>
            </div>
        </div>
    );
};

export default Shop;