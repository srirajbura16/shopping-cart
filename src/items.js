import { nanoid } from 'nanoid';

let items = [
  {
    title: 'Apple',
    price: 1.2,
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
