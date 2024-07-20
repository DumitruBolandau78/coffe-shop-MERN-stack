import './ButtonAnimation.scss';

// eslint-disable-next-line react/prop-types
const ButtonAnimation = ({ title, style, id, setCartItems }) => {
  const addToCart = async e => {
    if(e.target.id){
      await fetch('http://localhost:5500/products/add-to-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          productId: e.target.id,
          userId: localStorage.userId
        })
      })
        .then(res => res.json())
        .then(data => {
          setCartItems(data['cart']);
        })
        .catch(err => console.error(err))
    }
  }

  return (
    <button onClick={addToCart} id={id} style={style ? style : {}} className='btn-animation'>{title}</button>
  )
}

export default ButtonAnimation;