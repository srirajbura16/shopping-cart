import './App.css';

function Product(props) {
  const { title, price, img } = props;

  return (
    <div className="Product">
      <div className="product-img">
        <img src={window.location.origin + `/assets/${img}`} />
      </div>
      <div>{title}</div>
      <div>{`$${price}`}</div>
    </div>
  );
}

export default Product;
