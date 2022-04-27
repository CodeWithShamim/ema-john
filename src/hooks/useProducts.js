import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {

        fetch("https://ema-john-100.herokuapp.com/product")
            // fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return [products, setProducts];
};
export default useProducts;