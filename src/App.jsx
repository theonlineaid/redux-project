import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button, Paper, useTheme } from "@mui/material";

import MainLayout from "./layout/MainLayout";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./redux/features/cart/cartSlice";
import { useGetProductsQuery } from "./redux/services/productsApi";

function App() {
  const theme = useTheme();

  const { data, error, isLoading } = useGetProductsQuery();

  const dispatch = useDispatch();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const handleAddToCart = (product) => {
    // Dispatch the addToCart action with the product data
    dispatch(addToCart(product));
  };

  const cardStyle = {
    // Add your styles here
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    textAlign: "center",
    cursor: "pointer",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // This sets three equal-width columns
  };

  return (
    <>
      <MainLayout>
        <div style={cardStyle}>
          {data.map((product) => (
            <React.Fragment key={product.id}>
              <Paper>
                <div>
                  <p>{product.title.substring(0, 28)}...</p>
                  <Link to={`/product/${product.id}`}>
                    <img
                      style={{ width: 300 }}
                      src={product.images[0]}
                      alt={product.name}
                    />
                  </Link>

                  <br />
                  <Button
                    onClick={() => handleAddToCart(product)}
                    variant="contained"
                  >
                    Add to Card
                  </Button>
                </div>
              </Paper>
            </React.Fragment>
          ))}
        </div>
      </MainLayout>
    </>
  );
}

export default App;
