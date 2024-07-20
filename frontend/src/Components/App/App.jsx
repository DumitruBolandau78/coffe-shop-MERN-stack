import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { useState } from 'react';
import HomePage from '../../Pages/HomePage/HomePage';
import OrdersPage from '../../Pages/OrdersPage/OrdersPage';
import InfoProduct from '../../Pages/InfoProduct/InfoProduct';

const App = () => {
  const favoriteHandler = async (e) => {
    let method;
    if(e.target.classList.contains('favorite')){
      method = 'remove';
      e.target.classList.remove('favorite');
    } else {
      method = 'add';
      e.target.classList.add('favorite');
    }

    await fetch('http://localhost:5500/favorites/toggle-product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        method,
        userId: localStorage.userId,
        productId: e.target.id
      })
    })
    .then(res => res.json())
    .then(data => {
      localStorage.favorites = JSON.stringify(data);
      setFavorites(JSON.parse(localStorage.favorites));
    });
  }

  const [favorites, setFavorites] = useState(localStorage.favorites ? JSON.parse(localStorage.favorites) : []);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage favoriteHandler={favoriteHandler} favorites={favorites} />} />
        <Route path='/orders' element={ <OrdersPage /> } />
        <Route path='/products/:id' element={ <InfoProduct favoriteHandler={favoriteHandler} favorites={favorites} /> } />
      </Routes>
    </div>
  )
}

export default App