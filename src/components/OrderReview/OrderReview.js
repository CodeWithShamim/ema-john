import React from 'react';
import useProducts from '../../hooks/useProducts';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <h1>this is OrderReview: {products.length}</h1>
        </div>
    );
};

export default OrderReview;