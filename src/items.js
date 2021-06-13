import { nanoid } from 'nanoid';

let items = [
  {
    title: 'M1999 Pistol',
    price: 350,
    img: ,
    id: nanoid(),
  },
  {
    title: "Midnights's Pistol",
    price: 118,
    img: ,
    id: nanoid(),
  },
  {
    title: 'Mauser Pistol',
    price: 600,
    img: ,
    id: nanoid(),
  },
  {
    title: 'Semi Automatic Pistol',
    price: 537,
    img: ,
    id: nanoid(),
  },
  {
    title: 'Volcanic Pistol',
    price: 270,
    img: ,
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
