/* eslint-disable react/no-unescaped-entities */
import './Header.scss';
import './Account.scss'
import logo from '../../assets/logo.png';
import HeaderLink from '../HeaderLink/HeaderLink';
import { useEffect, useState } from 'react';
import CartItem from '../CartItem/CartItem';
import ButtonAnimation from '../ButtonAnimation/ButtonAnimation';
import { Link } from 'react-router-dom';

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

  const showAccountModal = () => {
    document.querySelector('.form-popup').classList.add('show-popup');
    document.querySelector('.blur-bg-overlay').classList.add('show-popup');
  }

  const [isLogin, setIsLogin] = useState(true);

  const linkToSignup = () => {
    setIsLogin(false);
    document.querySelector('.form-popup').classList.add('show-signup');
  }

  const linkToLogin = () => {
    document.querySelector('.form-popup').classList.remove('show-signup');
    setIsLogin(true);
  }

  const closeAccountPopup = () => {
    document.querySelector('.form-popup').classList.remove('show-popup');
    document.querySelector('.form-popup').classList.remove('show-signup');
    document.querySelector('.blur-bg-overlay').classList.remove('show-popup');
    setIsLogin(true);
  }

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
        <div className="options">
          <i onClick={cartModal} className="fa-solid fa-cart-shopping"></i>
          <i onClick={showAccountModal} className="fa-solid fa-user"></i>
        </div>
        <div className="open-cart" style={isOpenCart ? { right: '0' } : { right: '-100%' }}>
          {cartItems.length ? (cartItems.map((item, idx) => <CartItem key={idx} {...item} />)) : (<p style={{ textAlign: 'center' }}>No products found.</p>)}
          {cartItems ? <div className='center'><ButtonAnimation style={{ fontSize: '1rem', padding: '0.8rem 0rem', maxWidth: '150px' }} title={'Checkout Now'} /></div> : ''}
        </div>
      </div>

      <div className="blur-bg-overlay"></div>
      <div className="form-popup">
        <i onClick={closeAccountPopup} className="close-btn fa-solid fa-close"></i>
        {isLogin ?
          <div className="form-box login">
            <div className="form-details">
              <h2>Welcome Back</h2>
              <p>Please log in using your personal information to stay connected with us.</p>
            </div>
            <div className="form-content">
              <h2>LOGIN</h2>
              <form action="#" method='post'>
                <div className="input-field">
                  <input type="text" required />
                  <label>Email</label>
                </div>
                <div className="input-field">
                  <input type="password" required />
                  <label>Password</label>
                </div>
                <Link to={'/change-password'} className="forgot-pass-link">Forgot password?</Link>
                <button type="submit">Log In</button>
              </form>
              <div className="bottom-link">
                Don't have an account?
                <button onClick={linkToSignup} className='signup-link'>Signup</button>
              </div>
            </div>
          </div>
          :
          <div className="form-box signup">
            <div className="form-details">
              <h2>Create Account</h2>
              <p>To become a part of our community, please sign up using your personal information.</p>
            </div>
            <div className="form-content">
              <h2>SIGNUP</h2>
              <form action="#">
                <div className="input-field">
                  <input type="text" required />
                  <label>Enter your email</label>
                </div>
                <div className="input-field">
                  <input type="password" required />
                  <label>Create password</label>
                </div>
                <button type="submit">Sign Up</button>
              </form>
              <div className="bottom-link">
                Already have an account?
                <button onClick={linkToLogin} className='login-link'>Login</button>
              </div>
            </div>
          </div>
        }
      </div>

    </header>
  )
}

export default Header