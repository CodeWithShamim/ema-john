// import React, {useEffect, useState} from 'react';
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
// import {addToDb, getStoredCart} from '../../utilities/fakedb';
import useProducts from "../../hooks/useProducts";
import useCart from "../../hooks/useCart";
import { addToDb, deleteShoppingCart } from "../../utilities/fakedb";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Shop = () => {
  // const [products, setProducts] = useProducts();
  const [products] = useProducts();
  const [count, setCount] = useState(10);
  const [page, setPage] = useState(0);

  // const [cart, setCart] = useState([]);
  //  // getStordCart
  //  useEffect(()=>{
  //     const storedCart = getStoredCart();
  //     const savedCart = []
  //     for(const id in storedCart){
  //         // console.log(id);
  //         const findProduct = products.find(product=> product._id===id);
  //         if(findProduct){
  //             const quantity = storedCart[id];
  //             findProduct.quantity = quantity;
  //             savedCart.push(findProduct);
  //         }
  //     }
  //     setCart(savedCart);
  // },[products])

  const [cart, setCart] = useCart(products);

  // clear cart from local storage
  const clearCart = () => {
    deleteShoppingCart();
    setCart([]);
  };

  const addToCart = (product) => {
    const exits = cart.find((findItem) => findItem._id === product._id);
    let newCart = [];
    if (!exits) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const rest = cart.filter((findItem) => findItem._id !== product._id);
      exits.quantity = exits.quantity + 1;
      newCart = [...rest, exits];
    }

    setCart(newCart);
    addToDb(product._id);

    // scrollin window for mobile devie
    // console.log(window.innerWidth);
    // if(window.innerWidth <= 576){
    //     window.scrollTo(0, 20);
    // }
  };

  // console.log(cart);

  return (
    <>
      <div className="shop-container row p-4">
        <div className="products-container col-md-8 order-2 order-md-1">
          <div className="row gy-5">
            {products.map((product) => (
              <Product
                key={product._id}
                product={product}
                addToCart={addToCart}
              ></Product>
            ))}
          </div>
        </div>
        <div className="cart-container col-md-4 order-1 order-md-2">
          <div className="sticky-item">
            <Cart cart={cart} clearCart={clearCart}>
              <Link to="/order-review">
                <button className="border-0 px-3 py-2 fw-bold text-white bg-primary rounded m-3">
                  Review Order{" "}
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
              </Link>
            </Cart>
          </div>
        </div>
      </div>
      <div className="pagination-container py-3">
        {[...Array(count).keys()].map((number) => (
          <button
            className={page === number ? "selected" : ""}
            onClick={() => setPage(number)}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Shop;
