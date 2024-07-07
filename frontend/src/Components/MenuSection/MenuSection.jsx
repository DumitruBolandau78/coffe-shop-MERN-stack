import { useState } from 'react';
import './MenuSection.scss';
import MenuItem from '../MenuItem/MenuItem';

const MenuSection = () => {
    // eslint-disable-next-line no-unused-vars
    const [menuItems, setMenuItems] = useState([
        {
            imgUrl: '/src/assets/MenuImg/coffee1.png',
            title: 'Tasy and Healty',
            price: 20.99,
            newPrice: 14.99
        },
        {
            imgUrl: '/src/assets/MenuImg/coffee2.png',
            title: 'Tasy and Healty',
            price: 20.99,
            newPrice: 14.99
        },
        {
            imgUrl: '/src/assets/MenuImg/coffee3.png',
            title: 'Tasy and Healty',
            price: 20.99,
            newPrice: 14.99
        },
        {
            imgUrl: '/src/assets/MenuImg/coffee4.png',
            title: 'Tasy and Healty',
            price: 20.99,
            newPrice: 14.99
        },
        {
            imgUrl: '/src/assets/MenuImg/coffee5.png',
            title: 'Tasy and Healty',
            price: 20.99,
            newPrice: 14.99
        },
        {
            imgUrl: '/src/assets/MenuImg/coffee6.png',
            title: 'Tasy and Healty',
            price: 20.99,
            newPrice: 14.99
        }
    ]);
  return (
    <section className='menu-section' id='menu'>
        <h2 className='menu-section-title'>OUR <span>MENU</span></h2>
        <div className="menu-items">
            { menuItems.map((item, idx) => <MenuItem minWidth={100} minHeight={100} key={idx} {...item} hover={true} />) }
        </div>
    </section>
  )
}

export default MenuSection;