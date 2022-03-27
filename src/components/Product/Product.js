import React from 'react';
import './Product.css'

const Product = (props) => {
    const {product, handleAddToCart} = props;
    const {name, picture, price} = product;
    return (
        <div>
            <div className='card'>
                <img src={picture} className="me-0 card-img-top" alt="" />
                <div className="card-body p-0">
                    <h5 className="card-title pt-3">{name}</h5>
                    <p className="card-text">Price: ${price}</p>
                    <button onClick={() => handleAddToCart(product)} className="btn-cart btn btn-outline-dark">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;<h2>this is products</h2>