import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ReviewItems.css'

const ReviewItems = ({item}) => {
    const {img, name, price, shipping} = item;
    console.log(item);
    return (
        <div className='container bg-light col-md-8 mt-4 rounded d-flex justify-content-evenly align-items-center border border-warning'>
            <img id='custom-img' src={img} className='img-fluid' alt="" />
           <div className='p-4'>
                <h4>{name}</h4>
                <h6>Price: <span className='text-warning'>${price}</span></h6>
                <h6>Shipping Charge: <span className='text-warning'>${shipping}</span></h6>
           </div>
           <div className='icon-container'>
               <FontAwesomeIcon id='custom-icon' className='text-danger fs-2 p-3' icon={faTrashAlt}></FontAwesomeIcon>
           </div>
            
            
        </div>
    );
};

export default ReviewItems;