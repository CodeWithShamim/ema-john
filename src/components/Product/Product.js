import React from "react";
import "./Product.css";
// font awesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;

  // mx-0 mx-md-4
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="linear"
      data-aos-duration="700"
      className="product col-md-4"
    >
      <div className="text-center">
        <img src={img} alt="" className="img-fluid rounded" />
      </div>
      <div className="py-5">
        <p className="product-name">{name}</p>
        <p className="product-price">Price: ${price}</p>
        <div className="product-info">
          <p>Seller: {seller}</p>
          <p>Ratings: {ratings}</p>
        </div>
      </div>
      <button
        className="cartButton"
        onClick={() => props.addToCart(props.product)}
      >
        <p style={{ color: "black", fontWeight: "bold" }}>
          Add to Cart{" "}
          {<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>}
        </p>
      </button>
    </div>
  );
};

export default Product;
