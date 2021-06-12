import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { findProduct } from '../items';

function ItemDetail(props) {
  let { id } = useParams();

  const product = findProduct(id);

  return (
    <div>
      {/* {Add image} */}
      <h1>{id}</h1>
      <form>
        <div>{product.title}</div>
        <div>{product.price}</div>
        <input type="number" max="5" min="0" placeholder="1" />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

//'add to cart' btn -> submit -> add item to card products as obj with the amount. ex:
// const obj = {
//   item,
//   amount,
// };

export default ItemDetail;
