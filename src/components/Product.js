import './App.css';

function Product(props) {
  const { title, price } = props;

  return (
    <div className="Product">
      <div className="product-img"></div>
      <div>{title}</div>
      <div>{price}</div>
    </div>
  );
}

export default Product;
