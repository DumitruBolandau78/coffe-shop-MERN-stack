import './MenuItem.scss';
import ButtonAnimation from '../ButtonAnimation/ButtonAnimation'

// eslint-disable-next-line react/prop-types
const MenuItem = ({ imgUrl, title, price, newPrice, minWidth, minHeight, hover, children }) => {
  function isHover(){
    if(hover){
      return 'hover';
    } else {
      return 'no-hover';
    }
  }
  return (
    <div className={`menu-card-item ${isHover()}`}>
      {children ? <div className='children'>{children}</div>: ''}
      <div className="card-title-img">
        <div className="image" style={{ backgroundImage: `url(${imgUrl})`, minHeight: minHeight, minWidth: minWidth }}></div>
      </div>
      <h3 className="card-item-title">{title}</h3>
      <div className="payment">
        <span className='new-price'>${newPrice} </span>
        <span className='price'>${price}</span>
      </div>
      <ButtonAnimation style={{fontSize: '1.2rem'}} title={'Add to Cart'} />
    </div>
  )
}

export default MenuItem;