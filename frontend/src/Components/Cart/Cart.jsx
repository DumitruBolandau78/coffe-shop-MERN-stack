import './Cart.scss';
import { useState } from 'react';
import ButtonAnimation from '../ButtonAnimation/ButtonAnimation';
import CartItem from '../CartItem/CartItem';

// eslint-disable-next-line react/prop-types
const Cart = ({ isOpenCart }) => {
    // eslint-disable-next-line no-unused-vars
    const [cartItems, setCartItems] = useState([
        {
            imgUrl: '/src/assets/BlogsImg/article1.png',
            title: 'Tasty and Refreshing Coffee',
            price: 220
        },
        {
            imgUrl: '/src/assets/BlogsImg/article2.png',
            title: 'Tasty and Refreshing Coffee',
            price: 220
        },
        {
            imgUrl: '/src/assets/BlogsImg/article3.png',
            title: 'Tasty and Refreshing Coffee',
            price: 220
        }
    ]);

    return (
        <div className="open-cart" style={isOpenCart ? { right: '0' } : { right: '-100%' }}>
            {cartItems.length ? (cartItems.map((item, idx) => <CartItem key={idx} {...item} />)) : (<p style={{ textAlign: 'center' }}>No products found.</p>)}
            {cartItems ? <div className='center'><ButtonAnimation style={{ fontSize: '1rem', padding: '0.8rem 0rem', maxWidth: '150px' }} title={'Checkout Now'} /></div> : ''}
        </div>
    )
}

export default Cart