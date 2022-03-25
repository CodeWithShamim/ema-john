import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
// FontAwesomeIcon
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Header=() => {
    return (
        <div className='row header-sticky'>
            <nav className='header-nav col-md-12 header-sticky'>
                <a href="https://ema-john-shamim.netlify.app/"><img src={logo} alt="" /></a>

       
                <input type="checkbox" id='check'/>
                <label htmlFor="check" className='barIcon'>
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </label>
                <div className='me-5 header-info'>
                    <a href="https://ema-john-shamim.netlify.app/">Order</a>
                    <a href="https://ema-john-shamim.netlify.app/">Order Review</a>
                    <a href="https://ema-john-shamim.netlify.app/">Manage Inventory</a>
                    <a href="https://ema-john-shamim.netlify.app/">About</a>
                    <a href="https://ema-john-shamim.netlify.app/">Privacy & Policy</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;