/* eslint-disable react/prop-types */
import './CartItem.scss';

// eslint-disable-next-line react/prop-types
const CartItem = ({productId, quantity, setCartItems}) => {
  const deleteFromCart = async e => {
    await fetch('http://localhost:5500/products/delete-from-cart', {
      method: 'POST',
      body: JSON.stringify({ productId: e.target.id, userId: localStorage.userId }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => setCartItems(data['cart']))
    .catch(err => console.error(err))
  }

  return (
    <div className='cart-item'>
        <div className="cart-img" style={{backgroundImage: `url(${productId['imgUrl']})`}}></div>
        <div className="item-info">
            <h4 className="item-title">{productId['title']}</h4>
            <div className="item-price">${productId['newPrice']} <span className='line-through'>${productId['price']}</span> <span className='quantity'>x{quantity}</span></div>
        </div>
        <div className="close">
            <i onClick={deleteFromCart} id={`${productId._id}`} className="fa-solid fa-xmark"></i>
        </div>
    </div>
  )
}

export default CartItem