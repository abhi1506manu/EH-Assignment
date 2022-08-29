import React from "react";
import './productItem.css';
import { FaTimes } from 'react-icons/fa'

const ProductItem = (props) => {
    return (
        <li className="product-item">
            <h2>{props.name}<FaTimes className="icons" style={{ color: 'red', cursor: 'pointer' }} /></h2>
            <p>Price: ₹{props.price}</p>
        </li>
    );
};
export default ProductItem;