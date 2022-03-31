import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
// FontAwesomeIcon
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';


const Header=() => {
    return (
        <div className='row header-sticky'>
            <nav className='header-nav col-md-12 header-sticky'>
                <Link to='/'><img src={logo} alt="" /></Link>

       
                <input type="checkbox" id='check'/>
                <label htmlFor="check" className='barIcon'>
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </label>
                <div className='me-5 header-info'>
                    <Link to="/shop">Shop</Link>
                    <Link to="/order-review">Order Review</Link>
                    <Link to="/manage-inventory">Manage Inventory</Link>
                    <Link to="/about">About</Link>
                    <Link to="/privacy&policy">Privacy & Policy</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;