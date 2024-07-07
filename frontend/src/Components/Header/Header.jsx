import './Header.scss';
import logo from '../../assets/logo.png';
import HeaderLink from '../HeaderLink/HeaderLink';
import { useEffect, useState } from 'react';
import CartItem from '../CartItem/CartItem';
import ButtonAnimation from '../ButtonAnimation/ButtonAnimation';

const Header = () => {
  const sections = ['Home', 'About', 'Menu', 'Products', 'Review', 'Contact', 'Blogs'];

  const scrollToId = (e) => {
    const headerHeight = document.getElementById('header').clientHeight;
    const section = document.getElementById(e.target.textContent.toLowerCase());
    window.scrollTo(0, section.getBoundingClientRect().top + window.scrollY - headerHeight);
  }

  const [isOpenCart, setIsOpenCart] = useState(false);

  const cartModal = () => {
    isOpenCart ? setIsOpenCart(false) : setIsOpenCart(true);
  }

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

  useEffect(() => {
    document.querySelector('.open-cart').style.maxHeight = window.innerHeight - document.querySelector('.header').clientHeight + 'px';
    document.querySelector('.open-cart').style.top = document.querySelector('.header').clientHeight + 'px';
  });

  return (
    <header className='header' id='header'>
      <div className="inner">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <nav className='navigation'>
          <ul className='list-items'>
            {
              sections.map((section, idx) => <HeaderLink scrollToId={scrollToId} key={idx} title={section} />)
            }
          </ul>
        </nav>
        <div className="cart">
          <i onClick={cartModal} className="fa-solid fa-cart-shopping"></i>
        </div>
        <div className="open-cart" style={isOpenCart ? { right: '0' } : { right: '-100%' }}>
            { cartItems.length ? (cartItems.map((item, idx) => <CartItem key={idx} {...item} />)) : (<p style={{textAlign: 'center'}}>No products found.</p>) }
            { cartItems ? <div className='center'><ButtonAnimation style={{fontSize: '1rem', padding: '0.8rem 0rem', maxWidth: '150px'}} title={'Checkout Now'} /></div> : ''}
        </div>
      </div>
    </header>
  )
}

export default Header