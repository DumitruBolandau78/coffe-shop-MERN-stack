import './ProductsSection.scss';
import MenuItem from '../MenuItem/MenuItem';
import { useEffect, useState } from 'react';
import Spinner from '../../Utils/Spinner/Spinner';
import { Link } from 'react-router-dom';
import checkProductIdExists from '../../Utils/CheckIfFavorite/CheckIfFavorite';

// eslint-disable-next-line react/prop-types
const ProductsSection = ({setCartItems, favorites, favoriteHandler}) => {
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
            <MenuItem setCartItems={setCartItems} minWidth={150} minHeight={200} key={prod._id} {...prod} hover={false} >
              <i className="fa-solid fa-cart-shopping" title='Add to Cart'></i>
              <i id={prod._id} title='Add to Favorites' onClick={favoriteHandler} className={`fa-solid fa-heart ${checkProductIdExists(favorites, prod._id)? 'favorite' : ''}`}></i>
              <Link className='show-info-link' to={'/products/' + prod._id}>
                <i className="fa-solid fa-eye" title='Product information'></i>
              </Link>
              
            </MenuItem>
          )}
      </div>
    </section>
  )
}

export default ProductsSection;