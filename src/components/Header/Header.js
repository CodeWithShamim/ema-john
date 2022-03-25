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
                <div className='me-5 header-info'>
                    <a href="https://ema-john-shamim.netlify.app/">Order</a>
                    <a href="https://ema-john-shamim.netlify.app/">Order Review</a>
                    <a href="https://ema-john-shamim.netlify.app/">Manage Inventory</a>
                </div>
                <div className='barContainer'>
                    <input type="checkbox" id='check'/>
                    <label htmlFor="check">
                        <FontAwesomeIcon icon={faBars} className='barIcon'></FontAwesomeIcon>
                    </label>
                </div>
            </nav>
        </div>
    );
};

export default Header;