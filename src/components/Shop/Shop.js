import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[]);

    const handleAddToCart = (product) =>{
        console.log(product)
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='row'>
            <div className="products-container col-md-9 card-group">
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container col-md-3 bg-secondary">
                <h3>order summary</h3>
                <div>
                    <p>{cart.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;