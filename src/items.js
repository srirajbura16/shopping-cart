import { nanoid } from 'nanoid';

let items = [
  {
    title: 'Bow',
    price: 33,
    img: 'bow.jpg',
    id: nanoid(),
  },
  {
    title: 'Hunting Knife',
    price: 18,
    img: 'hunting-knife.jpg',
    id: nanoid(),
  },
  {
    title: 'Lasso',
    price: 8,
    img: 'lasso.jpg',
    id: nanoid(),
  },
  {
    title: 'M1899',
    price: 350,
    img: 'm1899.jpg',
    id: nanoid(),
  },
  {
    title: 'Semi Automatic Pistol',
    price: 210,
    img: 'semi-automatic-pistol.jpg',
    id: nanoid(),
  },
  {
    title: 'Varmint Rifle',
    price: 72,
    img: 'varmint-rifle.jpg',
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
