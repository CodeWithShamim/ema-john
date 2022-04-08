import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
// FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ActiveLink from "../ActiveLink/ActiveLink";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import loginIcon from "../../images/login-icon.png";

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
        <div>
          <Link to="/login" className="text-light fw-bold me-2">
            Login
            <span className="ms-1">
              <img
                src={loginIcon}
                alt="loginIcon"
                style={{ width: "25px", height: "20px" }}
              />
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
