

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './purchase.css';

const Purchase = (props) => {
    const {product, handleAddToCart} = props;
    const { name, img, seller, price, ratings } = product;
    
    return (
        <div className='product'>

            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
           
        </div>
    );
};

export default Purchase;