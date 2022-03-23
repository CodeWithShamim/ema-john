import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header=() => {
    return (
        <div className='row header-sticky'>
            <nav className='header-nav col-md-12 header-sticky'>
                <a href="./home"><img src={logo} alt="" /></a>
                <div className='me-5'>
                    <a href="./order">Order</a>
                    <a href="./order-review">Order Review</a>
                    <a href="./manage-inventory">Manage Inventory</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;