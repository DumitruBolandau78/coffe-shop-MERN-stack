import './Cart.scss';
import ButtonAnimation from '../../Utils/ButtonAnimation/ButtonAnimation';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Cart = ({ isOpenCart, cartItems, setCartItems }) => {
    // eslint-disable-next-line no-unused-vars

    return (
        <div className="open-cart" style={isOpenCart ? { right: '0' } : { right: '-100%' }}>
            {cartItems.length ? cartItems.map(item => <CartItem setCartItems={setCartItems} key={item.productId._id} {...item} />) : (<p style={{ textAlign: 'center' }}>No products found.</p>)}
            {cartItems.length ? <div className='center'><Link className='to-orders-link' to={'/orders'}><ButtonAnimation style={{ fontSize: '1rem', padding: '0.8rem 0rem', maxWidth: '150px' }} title={'Checkout Now'} /></Link></div> : ''}

        </div>
    )
}

export default Cart