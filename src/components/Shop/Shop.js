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
import { useEffect, useState } from "react";

const Shop = () => {
    // const [products, setProducts] = useProducts();
    const [products, setProducts] = useProducts();
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    // get data for pagination_____________________________
    useEffect(() => {
        const url = `https://ema-john-100.herokuapp.com/product?page=${page}&size=${size}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [page, size]);
    //_____________________________________________________
    console.log(count);

    useEffect(() => {
        fetch("https://ema-john-100.herokuapp.com/productCount")
            .then((res) => res.json())
            .then((data) => setCount(Math.ceil(data.count / 10)));
    }, []);

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

    return ( <
        >
        <
        div className = "shop-container row mx-3" >
        <
        div className = "px-0 px-md-5 products-container col-md-9 order-2 order-md-1 row g-4 pb-5" > {
            products.map((product) => ( <
                Product key = { product._id }
                product = { product }
                addToCart = { addToCart } >
                <
                /Product>
            ))
        } <
        /div> <
        div className = "cart-container col-md-3 order-1 order-md-2" >
        <
        div className = "sticky-item" >
        <
        Cart cart = { cart }
        clearCart = { clearCart } >
        <
        Link to = "/order-review" >
        <
        button className = "border-0 px-3 py-2 fw-bold text-white bg-primary rounded m-3" >
        Review Order { " " } <
        FontAwesomeIcon icon = { faArrowRight } > < /FontAwesomeIcon> < /
        button > <
        /Link> < /
        Cart > <
        /div> < /
        div > <
        /div>

        { /* pagination */ } <
        div className = "pagination-container py-3" > {
            [...Array(count).keys()].map((number) => ( <
                button className = { page === number ? "selected" : "" }
                onClick = {
                    () => setPage(number)
                } > { number + 1 } <
                /button>
            ))
        }

        { /* --------------------- */ } <
        select onChange = {
            (e) => setSize(e.target.value)
        } >
        <
        option value = "5" > 5 < /option> <
        option value = "10"
        selected >
        10 <
        /option> <
        option value = "15" > 15 < /option> <
        option value = "20" > 20 < /option> < /
        select > <
        /div> < /
        >
    );
};

export default Shop;