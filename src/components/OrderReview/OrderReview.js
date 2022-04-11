import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItems from "../ReviewItems/ReviewItems";
import "./OrderReview.css";

const OrderReview = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  // console.log(cart);

  const removeItem = (id) => {
    console.log(id);
    const findProduct = cart.filter((item) => item.id !== id);
    setCart(findProduct);
    // remove from local Storage
    removeFromDb(id);
  };

  const clearCart = () => {
    deleteShoppingCart();
    setCart([]);
  };

  return (
    <div>
      <div className="row">
        <div className="products-container col-md-8">
          {cart.map((item) => (
            <ReviewItems
              key={item.id}
              item={item}
              removeItem={removeItem}
            ></ReviewItems>
          ))}
        </div>
        <div className="cart-container col-md-4 order-1 order-md-2">
          <div className="sticky-item">
            <Cart cart={cart} clearCart={clearCart}>
              <Link to="/shipment">
                <button className="border-0 px-5 py-2 fw-bold text-white bg-warning rounded m-3">
                  Proceed Shipment{" "}
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
              </Link>
            </Cart>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
