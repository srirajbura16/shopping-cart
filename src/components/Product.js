import './App.css';

function Product(props) {
  const { title, price, img } = props;

  return (
    <div className="product">
      <div className="product-img">
        <img src={process.env.PUBLIC_URL + `/assets/${img}`} />
      </div>
      <div>{title}</div>
      <div>{`$${price}`}</div>
    </div>
  );
}

export default Product;
