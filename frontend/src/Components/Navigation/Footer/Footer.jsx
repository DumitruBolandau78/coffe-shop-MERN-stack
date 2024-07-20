import './Footer.scss';
import { Link } from 'react-router-dom';
import HeaderLink from '../HeaderLink/HeaderLink';

const Footer = () => {
    const sections = ['Home', 'About', 'Menu', 'Products', 'Review', 'Contact', 'Blogs'];

    const scrollToId = (e) => {
        const headerHeight = document.getElementById('header').clientHeight;
        const section = document.getElementById(e.target.textContent.toLowerCase());
        window.scrollTo(0, section.getBoundingClientRect().top + window.scrollY - headerHeight);
    }

    return (
        <footer className='footer'>
            <div className="footer-inner">
                <div className="social-media">
                    <Link className='link' to={'/'} target='_blank'>
                        <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link className='link' to={'/'} target='_blank'>
                        <i className="fa-brands fa-facebook"></i>
                    </Link>
                    <Link className='link' to={'/'} target='_blank'>
                        <i className="fa-brands fa-linkedin"></i>
                    </Link>
                    <Link className='link' to={'/'} target='_blank'>
                        <i className="fa-brands fa-twitter"></i>
                    </Link>
                </div>
                <ul className="links">
                {
                    sections.map((section, idx) => <HeaderLink scrollToId={scrollToId} key={idx} title={section} />)
                }
                </ul>
                <p>Created With <span>&#10084;</span> By Bolandau Dumitru</p>
            </div>
        </footer>
    )
}

export default Footer