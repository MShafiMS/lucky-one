import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [modalIsOpen, setIsOpen] =    useState(false);


   
    
    
    
    function openModal() {
   
        setIsOpen(true);
      }

    function closeModal() {
        setIsOpen(false);
      }

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

    function emptyCart(){
        setCart([]);
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
                <div>
                    <h3 className='text-white pt-2'>Order Summary</h3>
                    {cart.map((item) => (
                    <Cart key={item.id} item={item}></Cart>
                    ))}
                </div>
                <button onClick={openModal} className="btn-pm btn btn-outline-dark">
                        Chose 1 for me
                    </button>
                    <br />
                <button onClick={emptyCart} className="btn-pm btn btn-outline-dark">
                        Chose Again
                    </button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal} className="btn-nb btn btn-outline-danger">x</button>
                <div>
                {cart.map((item) => (
                    <Cart key={item.id} item={item}></Cart>
                    ))}
                </div>
            </Modal>
        </div>
    );
};

export default Shop;