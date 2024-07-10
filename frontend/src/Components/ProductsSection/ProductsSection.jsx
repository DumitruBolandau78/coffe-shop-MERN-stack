import './ProductsSection.scss';
import MenuItem from '../MenuItem/MenuItem';
import { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';

const ProductsSection = () => {
  // eslint-disable-next-line no-unused-vars
  const [productsItems, setproductsItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5500/products/latest-products')
      .then(res => res.json())
      .then(data => {
        setproductsItems(data)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <section className='products-section' id='products'>
      <h2 className='products-section-title'>LATEST <span>PRODUCTS</span></h2>
      <div className="products-items">
        {isLoading ?
          <Spinner /> :

          productsItems.map(prod =>
            <MenuItem minWidth={150} minHeight={200} key={prod._id} {...prod} hover={false} >
              <i className="fa-solid fa-cart-shopping"></i>
              <i className="fa-solid fa-heart"></i>
              <i className="fa-solid fa-eye"></i>
            </MenuItem>
          )}
      </div>
    </section>
  )
}

export default ProductsSection;