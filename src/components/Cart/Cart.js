import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { name, picture,} = props.item;
    return (
        <div>
            <div className='modal-info'>
                <img className='modal-image-container' src={picture} alt="" />
                <div>
                <h4>{name}</h4>
                </div>
            </div>
        </div>
    );
};

export default Cart;