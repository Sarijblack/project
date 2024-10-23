function Fruits({name, price, number}) {
  const fruits = [
    { name: "apple", price: 10, number: 1 },
    { name: "mango", price: 7, number: 2 },
    { name: "banana", price: 5, number: 3 },
    { name: "pineapple", price: 8, number: 4 },
  ];
  return <div>{name} {price} {number}</div>;
}

export default Fruits;
