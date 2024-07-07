import './ButtonAnimation.scss';

// eslint-disable-next-line react/prop-types
const ButtonAnimation = ({ title, style }) => {
  return (
    <button style={style ? style : {}} className='btn-animation'>{title}</button>
  )
}

export default ButtonAnimation;