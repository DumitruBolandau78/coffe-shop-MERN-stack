// import { useEffect, useState } from 'react';
import './HomePage.scss';
import { useState } from 'react';
import Header from '../../Components/Navigation/Header/Header'
import HomeSection from '../../Components/HomePageSections/HomeSection/HomeSection';
import AboutSection from '../../Components/HomePageSections/AboutSection/AboutSection';
import MenuSection from '../../Components/HomePageSections/MenuSection/MenuSection';
import ProductsSection from '../../Components/HomePageSections/ProductsSection/ProductsSection';
import ReviewSection from '../../Components/HomePageSections/ReviewSection/ReviewSection';
import ContactSection from '../../Components/HomePageSections/ContactSection/ContactSection';
import BlogsSection from '../../Components/HomePageSections/BlogsSection/BlogsSection';
import Footer from '../../Components/Navigation/Footer/Footer';

// eslint-disable-next-line react/prop-types
const Home = ({ favorites, favoriteHandler }) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className='container'>
        <Header cartItems={cartItems} setCartItems={setCartItems} />
        <HomeSection />
        <AboutSection />
        <MenuSection setCartItems={setCartItems} />
        <ProductsSection setCartItems={setCartItems} favoriteHandler={favoriteHandler} favorites={favorites} />
        <ReviewSection />
        <ContactSection />
        <BlogsSection />
        <Footer />
    </div>
  )
}

export default Home