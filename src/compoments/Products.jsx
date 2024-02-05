import React, { useContext } from 'react';
import Card from './Card';

const Products = () => {

  const products = [
    {id: 1, name: 'Jacket', price: 50},
    {id: 2, name: 'T-shirt', price: 60},
    {id: 3, name: 'Shirt', price: 70},
    {id: 4, name: 'Jumper', price: 80},
    {id: 5, name: 'Pant', price: 90}
  ]
 

  return (
    <div>
     {products.map(product => (
      <Card key={product.id} name={product.name} price={product.price} />
     ))}
    </div>
  );
};

export default Products;
