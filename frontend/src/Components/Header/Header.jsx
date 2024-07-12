/* eslint-disable react/no-unescaped-entities */
import './Header.scss';
import './Account.scss'
import logo from '../../assets/logo.png';
import HeaderLink from '../HeaderLink/HeaderLink';
import { useEffect, useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import toBoolean from '../../utils/toBoolean';
import Cart from '../Cart/Cart';

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

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  const [isLogged, setIsLogged] = useState(toBoolean(localStorage.isAuth));

  const loginHandler = async e => {
    e.preventDefault();

    await fetch('http://localhost:5500/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: loginEmail, password: loginPassword
      })
    })
    .then(res => res.json())
    .then(data => {
      if(data['logged'] === 'Successful'){
        localStorage.setItem('isAuth', true);
        setIsLogged(toBoolean(localStorage.isAuth));

        document.querySelector('.form-popup').classList.remove('show-popup');
        document.querySelector('.form-popup').classList.remove('show-signup');
        document.querySelector('.blur-bg-overlay').classList.remove('show-popup');
      } else {
        console.log(data)
      }
    })
    .catch(err => console.error(err))
  }

  const logoutHandler = async () => {
    await fetch('http://localhost:5500/auth/logout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      if(data['logout'] === 'Successful'){
        localStorage.setItem('isAuth', false);
        setIsLogged(toBoolean(localStorage.isAuth));
      }
    })
    .catch(err => console.error(err))
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
          { isLogged ? <i title='Logout' onClick={logoutHandler} className="fa-solid fa-right-from-bracket"></i> : <i title='Account' onClick={showAccountModal} className="fa-solid fa-user"></i> } 
        </div>
        <Cart isOpenCart={isOpenCart} />
      </div>

      <div className="blur-bg-overlay"></div>
      <div className="form-popup">
        <i onClick={closeAccountPopup} className="close-btn fa-solid fa-close"></i>
        {isLogin ?
          <LoginForm linkToSignup={linkToSignup} loginHandler={loginHandler} loginEmail={loginEmail} setLoginEmail={setLoginEmail} loginPassword={loginPassword} setLoginPassword={setLoginPassword} />
          :
          <SignupForm linkToLogin={linkToLogin} />
        }
      </div>

    </header>
  )
}

export default Header