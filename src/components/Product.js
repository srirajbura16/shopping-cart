import './App.css';
import bow from '../assets/bow.jpg';

function Product(props) {
  const { title, price, img } = props;

  return (
    <div className="Product">
      <div className="product-img">
        <img src={bow} />
      </div>
      <div>{title}</div>
      <div>{`$ ${price}`}</div>
    </div>
  );
}

export default Product;
