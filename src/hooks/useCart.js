import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = () => {
    const [cart, setCart] = useState([]);
    // const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart();
        const keys = Object.keys(storedCart);

        fetch("https://ema-john-100.herokuapp.com/productByKeys", {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(keys)
            })
            // fetch("products.json")
            .then(res => res.json())
            .then(products => {
                let savedCart = [];
                for (const id in storedCart) {
                    const addedCart = products.find(product => product._id === id);
                    if (addedCart) {
                        const quantity = storedCart[id];
                        addedCart.quantity = quantity;
                        savedCart.push(addedCart);

                    }
                }
                setCart(savedCart);
            });


    }, []);

    console.log()

    return [cart, setCart];
}

export default useCart;