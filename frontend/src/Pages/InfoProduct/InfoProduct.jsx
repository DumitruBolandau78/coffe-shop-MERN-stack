import { useEffect, useState } from 'react';
import './InfoProduct.scss';
import { useParams, Link } from 'react-router-dom';
import ButtonAnimation from '../../Components/Utils/ButtonAnimation/ButtonAnimation';
import checkProductIdExists from '../../Components/Utils/CheckIfFavorite/CheckIfFavorite';

// eslint-disable-next-line react/prop-types
const InfoProduct = ({ favorites, favoriteHandler }) => {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState('');
    const id = useParams();

    useEffect(() => {
        fetch('http://localhost:5500/products/get-product-info', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              productId: id
            })
          })
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.error(err))
    }, []);

  return (
    <section className='info-product'>
        <Link to={'/'}><i className="fa-solid fa-arrow-left"></i> Go Back</Link>
        <h1 className="product-title">{product['title']}</h1>
        <div className="content">
          <div className="image-prod">
            <img src={product['imgUrl']} alt="product" />
          </div>
          <div className="about-product">
            <div className="description">{product['text']}</div>
            <div className="options">
              <input onChange={(e) => setQuantity(e.target.value)} value={quantity} type="number" name="quantity" id="quantity" minLength={1} min={1} maxLength={2} max={50} placeholder='Quantity' />
              <ButtonAnimation title={'Add to Cart'} />
              <i title='Add to Favorites' id={id.id} onClick={favoriteHandler} className={`fa-solid fa-heart ${checkProductIdExists(favorites, id.id)? 'favorite' : ''}`}></i>
            </div>
          </div>
        </div>
    </section>
  )
}

export default InfoProduct