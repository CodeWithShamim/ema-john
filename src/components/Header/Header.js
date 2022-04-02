import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
// FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ActiveLink from "../ActiveLink/ActiveLink";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="row header-sticky">
      <nav className="header-nav col-md-12 header-sticky">
        <ActiveLink to="/">
          <img src={logo} alt="" />
        </ActiveLink>

        <input type="checkbox" id="check" />
        <label htmlFor="check" className="barIcon">
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </label>
        <div className="me-5 header-info d-md-flex">
          <ActiveLink to="/shop">Shop</ActiveLink>
          <ActiveLink to="/order-review">Order Review</ActiveLink>
          <ActiveLink to="/manage-inventory">Manage Inventory</ActiveLink>
          <ActiveLink to="/about">About</ActiveLink>
          <ActiveLink to="/privacy&policy">Privacy & Policy</ActiveLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
