import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'

const Products = (props) => {
    const {handleAddToCart, prodcuts} = props;
    const {img,name,price,ratings,seller,ratingsCount} = prodcuts;
    return (
        <div>
            <div className="product_item">
                <div className="product_img">
                    <img src={img} alt="" />
                </div>
                <div className="product_info">
                    <h4>{name}</h4>
                    <p>Seller: {seller}</p>
                    <p>Price: ${price}</p>
                    <p>Ratings: {ratings}({ratingsCount})</p>
                </div>
                <button onClick={()=>handleAddToCart(prodcuts)} className='addToCard'>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
            </div>

        </div>
    );
};

export default Products;