import React, { useEffect, useState, useMemo } from 'react'

import MainLayout from './layout/MainLayout'
// import Products from './compoments/Products'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './redux/features/product/productSlice'

import { addToCart } from './redux/features/cart/cartSlice';
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';


function App() {

  

  const count = useSelector((state) => state.counter.value)
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();


  // Fetch product data when the component mounts
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]); // The empty dependency array ensures this effect runs only once when the component mounts

  if (products.isLoading) {
    return <h2>Loading...</h2>
  }

  const handleAddToCart = (product) => {
    // Dispatch the addToCart action with the product data
    dispatch(addToCart(product));
  };

  const cardStyle = {
    // Add your styles here
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    textAlign: 'center',
    cursor: 'pointer',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // This sets three equal-width columns
  };





  console.log(products);
  return (
    <>
        <MainLayout>
          

          <div style={cardStyle}>
            {products.entities && products.entities.map(product => (
              <React.Fragment key={product.id} >


                <div>

                  <p>{product.title.substring(0, 28)}...</p>
                  <Link to={`/product/${product.id}`}>
                    <img style={{ width: 300 }} src={product.images[0]} alt={product.name} />
                  </Link>
                  {/*  <button onClick={handleAddToCart}>Add to Cart</button> 
                // is not recommendation method  */}

                  <br />
                  {/* <button onClick={() => handleAddToCart(product)}>Add to Cart</button> */}
                  <Button color="warning" onClick={() => handleAddToCart(product)} variant="contained">Add to Card</Button>


                </div>


                {/* // is recommendation  */}
              </React.Fragment>
            ))}
          </div>
          {/* <Products /> */}
        </MainLayout>
    </>
  )
}

export default App

