interface IProduct {
  name: string;
  price: number;
  quantity: number;
  total: number;
  image: string;
}

export const cartProducts: IProduct[] = [
  {
    name: "Product 1",
    price: 100,
    quantity: 10,
    total: 100,
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHZ8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Product 2",
    price: 200,
    quantity: 20,
    total: 200,
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHZ8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Product 3",
    price: 300,
    quantity: 30,
    total: 300,
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHZ8ZW58MHx8MHx8fDA%3D",
  },
];
