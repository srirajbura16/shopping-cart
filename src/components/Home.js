import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <div>Welcome to Wortgs general store</div>
      <div className="enter-shop">
        <Link to="./shop">Enter Shop</Link>
      </div>
    </div>
  );
}

export default Home;
