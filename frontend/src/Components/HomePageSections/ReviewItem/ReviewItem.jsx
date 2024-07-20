import './ReviewItem.scss';

// eslint-disable-next-line react/prop-types
const ReviewItem = ({ imgUrl, name }) => {
  return (
    <div className='costumer-review'>
        <i className="fa-solid fa-quote-right quote"></i>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum provident magni voluptatibus, eligendi perferendis at itaque consectetur quibusdam assumenda, officiis iusto asperiores sit, dicta id quasi deserunt delectus. Voluptate, aut.</p>
        <div className='user-avatar'>
            <img src={imgUrl} alt="" />
        </div>
        <div className="user-name">{name}</div>
        <div className="stars-review">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
        </div>
    </div>
  )
}

export default ReviewItem