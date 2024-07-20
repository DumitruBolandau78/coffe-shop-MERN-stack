import './ReviewSection.scss';
import { useState } from 'react';
import ReviewItem from '../ReviewItem/ReviewItem';

const ReviewSection = () => {
    // eslint-disable-next-line no-unused-vars
    const [reviews, setReviews] = useState([
        {
            imgUrl: '/src/assets/ReviewUsers/user1.png',
            name: 'George Hamilton',
            price: 20.99,
            newPrice: 14.99
        },
        {
            imgUrl: '/src/assets/ReviewUsers/user2.png',
            name: 'Carmen Dorroty',
            price: 20.99,
            newPrice: 14.99
        },
        {
            imgUrl: '/src/assets/ReviewUsers/user3.png',
            name: 'Cristopher Lopez',
            price: 20.99,
            newPrice: 14.99
        }
    ]);

    return (
        <section className='review-section' id='review' >
            <h2 className='review-section-title'>COSTUMER'S <span>REVIEW</span></h2>
            <div className="reviews-collection">
                { reviews.map((review, idx) => <ReviewItem key={idx} {...review} />) }
            </div>
        </section>
    )
}

export default ReviewSection