import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { findProduct } from '../items';

function ItemDetail(props) {
  let { id } = useParams();

  const product = findProduct(id);

  return (
    <div>
      {/* {Add image} */}
      <div>{product.title}</div>
      <div>{product.price}</div>
      <input type="number" max="5" min="0" placeholder="1" />
      <h1>{id}</h1>
    </div>
  );
}

//'add to cart' btn -> click -> add item to card products as obj with the amount. ex:
// const obj = {
//   item,
//   amount,
// };

export default ItemDetail;
