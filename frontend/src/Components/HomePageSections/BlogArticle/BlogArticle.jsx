import './BlogArticle.scss';
import ButtonAnimation from '../../Utils/ButtonAnimation/ButtonAnimation';

// eslint-disable-next-line react/prop-types
const BlogArticle = ({imgUrl, title, date, text}) => {
  return (
    <div className='blog-article'>
        <div className='image-box'>
          <div style={{backgroundImage: `url(${imgUrl})`, minHeight: '300px' }} className="article-image"></div>
        </div>
        <div className="blog-body">
            <h3 className="article-title">{title}</h3>
            <div className="article-date">Published at {date}</div>
            <div className="article-info">{text}</div>
            <ButtonAnimation style={{fontSize: '1rem', maxWidth: '160px'}} title={'Read More'}/>
        </div>
    </div>
  )
}

export default BlogArticle