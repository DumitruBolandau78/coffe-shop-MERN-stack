import './BlogsSection.scss';
import { useState } from 'react';
import BlogArticle from '../BlogArticle/BlogArticle';

const BlogsSection = () => {
    const [blogArticles, setBlogArticles] = useState([
        {
            imgUrl: '/src/assets/BlogsImg/article1.png',
            title: 'Tasty and Refreshing Coffee',
            date: new Date().toLocaleDateString(),
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, pariatur?'
        },
        {
            imgUrl: '/src/assets/BlogsImg/article2.png',
            title: 'Tasty and Refreshing Coffee',
            date: new Date().toLocaleDateString(),
                        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, pariatur?'
        },
        {
            imgUrl: '/src/assets/BlogsImg/article3.png',
            title: 'Tasty and Refreshing Coffee',
            date: new Date().toLocaleDateString(),
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, pariatur?'
        }
    ]);

    return (
        <section className='blogs-section' id='blogs'>
            <h2 className='blogs-section-title'>OUR <span>BLOGS</span></h2>
            <div className="blogs-collection">
                { blogArticles.map((article, idx) => <BlogArticle key={idx} {...article} />) }
            </div>
        </section>
    )
}

export default BlogsSection