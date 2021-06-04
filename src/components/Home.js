import './App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <div>Welcome to Wortgs general store</div>
      <div className="enter-shop">
        <Link to="./Shop">Enter Shop</Link>
      </div>
    </div>
  );
}

export default Home;
