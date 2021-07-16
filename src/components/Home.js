import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="Home">
      <div>
        Welcome to Worths Hunting Store. <br />
        Find everything you need
        <br />
        for your next hunting trip.
      </div>
      <Link to="/shop">
        <button class="enter-shop-btn">Enter Shop</button>
      </Link>
    </div>
  );
}

export default Home;
