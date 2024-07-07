import './ProductsSection.scss';
import MenuItem from '../MenuItem/MenuItem';
import { useState } from 'react';

const ProductsSection = () => {
  // eslint-disable-next-line no-unused-vars
  const [productsItems, setproductsItems] = useState([
    {
      imgUrl: '/src/assets/ProductsImg/coffee_bag1.png',
      title: 'Fresh Coffee',
      price: 20.99,
      newPrice: 14.99
    },
    {
      imgUrl: '/src/assets/ProductsImg/coffee_bag2.png',
      title: 'Fresh Coffee',
      price: 20.99,
      newPrice: 14.99
    },
    {
      imgUrl: '/src/assets/ProductsImg/coffee_bag3.png',
      title: 'Fresh Coffee',
      price: 20.99,
      newPrice: 14.99
    }
  ]);

  return (
    <section className='products-section' id='products'>
      <h2 className='products-section-title'>LATEST <span>PRODUCTS</span></h2>
      <div className="products-items">
        { productsItems.map((prod, idx) => 
          <MenuItem minWidth={150} minHeight={200} key={idx} {...prod} hover={false} >
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