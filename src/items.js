import { nanoid } from 'nanoid';
import './assets/m1899.jpg';

let items = [
  {
    title: 'Bow',
    price: 22,
    id: nanoid(),
  },
  {
    title: 'Bow',
    price: 22,
    id: nanoid(),
  },
  {
    title: 'Bow',
    price: 22,
    id: nanoid(),
  },
  {
    title: 'Bow',
    price: 22,
    id: nanoid(),
  },
  {
    title: 'Bow',
    price: 22,
    id: nanoid(),
  },
  {
    title: 'Bow',
    price: 22,
    id: nanoid(),
  },
];

function findProduct(id) {
  return items.find((item) => {
    if (item.id === id) {
      return item;
    }
  });
}

export { items, findProduct };

//install nanaid and add it to each item.
