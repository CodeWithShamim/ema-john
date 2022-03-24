import React, {useEffect, useState} from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import {addToDb, getStoredCart} from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[]);


    const [cart, setCart] = useState([]);
    const addToCart = (product)=>{
        const exits = cart.find(findItem=> findItem.id === product.id);
        let newCart = [];
        if(!exits){
            product.quantity =1;
             newCart = [...cart, product];
        }else{
            const rest = cart.filter(findItem=> findItem.id!==product.id)
            exits.quantity = exits.quantity +1;
            newCart = [...rest, exits];
        }
       
        setCart(newCart);
        addToDb(product.id)
        
    }


    // getStordCart 
    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = []
        for(const id in storedCart){
            // console.log(id);
            const findProduct = products.find(product=> product.id===id);
            if(findProduct){
                const quantity = storedCart[id];
                findProduct.quantity = quantity;
                savedCart.push(findProduct);
            }
        }
        setCart(savedCart);
    },[products])
    
    // console.log(cart);

    
    return (
        <div className='shop-container row p-4'>
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