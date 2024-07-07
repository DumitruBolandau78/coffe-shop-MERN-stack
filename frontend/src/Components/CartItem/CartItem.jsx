import './CartItem.scss';

// eslint-disable-next-line react/prop-types
const CartItem = ({imgUrl, title, price}) => {
  return (
    <form method='post' action='/delete' className='cart-item'>
        <div className="cart-img" style={{backgroundImage: `url(${imgUrl})`}}></div>
        <div className="item-info">
            <h4 className="item-title">{title}</h4>
            <div className="item-price">${price}</div>
        </div>
        <div className="close">
            <button><i className="fa-solid fa-xmark"></i></button>
        </div>
    </form>
  )
}

export default CartItem