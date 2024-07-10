import { useEffect, useState } from 'react';
import './MenuSection.scss';
import MenuItem from '../MenuItem/MenuItem';
import Spinner from '../Spinner/Spinner';

const MenuSection = () => {
    // eslint-disable-next-line no-unused-vars
    const [menuItems, setMenuItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5500/products/menu-products')
            .then(res => res.json())
            .then(data => { setMenuItems(data), setIsLoading(false)})
            .catch(err => console.log(err))
    }, []);
  return (
    <section className='menu-section' id='menu'>
        <h2 className='menu-section-title'>OUR <span>MENU</span></h2>
        <div className="menu-items">
            { isLoading ? <Spinner /> : menuItems.map(item => <MenuItem minWidth={100} minHeight={100} key={item._id} {...item} hover={true} />) }
        </div>
    </section>
  )
}

export default MenuSection;