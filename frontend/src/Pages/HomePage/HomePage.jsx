// import { useEffect, useState } from 'react';
import './HomePage.scss';
import Header from '../../Components/Header/Header'
import HomeSection from '../../Components/HomeSection/HomeSection';
import AboutSection from '../../Components/AboutSection/AboutSection';
import MenuSection from '../../Components/MenuSection/MenuSection';
import ProductsSection from '../../Components/ProductsSection/ProductsSection';
import ReviewSection from '../../Components/ReviewSection/ReviewSection';
import ContactSection from '../../Components/ContactSection/ContactSection';
import BlogsSection from '../../Components/BlogsSection/BlogsSection';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5500/')
    //         .then(res => res.json())
    //         .then(data => setData(data))
    //         .catch(e => {
    //             console.error(e);
    //         });
    // }, []);
    // console.log(data);

  return (
    <div className='container'>
        <Header />
        <HomeSection />
        <AboutSection />
        <MenuSection />
        <ProductsSection />
        <ReviewSection />
        <ContactSection />
        <BlogsSection />
        <Footer />
    </div>
  )
}

export default Home