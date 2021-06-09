import './App.css';
import { Link } from 'react-router-dom';

function Product(props) {
  const { title, price, img } = props;

  return (
    <div className="Product">
      <div className="product-img">
        <img src={img} />
      </div>
      <div>{title}</div>
      <div>{price}</div>
    </div>
  );
}

export default Product;
