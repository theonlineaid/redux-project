import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../redux/features/cart/cartSlice";
import InnerImageZoom from "react-inner-image-zoom";
import MainLayout from "../layout/MainLayout";
import Loading from "../compoments/Loading";
import RelatedSliderProduct from "../compoments/RelatedSliderProduct";
import { Button } from "@mui/material";
import {
  useGetProductIDQuery,
  useGetRelatedProductQuery,
} from "../redux/services/productsApi";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const {
    data: selectedProduct,
    isLoading,
    isError,
  } = useGetProductIDQuery(productId);

  const {
    data: relatedProductsData,
    isLoading: relatedProductsLoading,
    isError: relatedProductsError,
  } = useGetRelatedProductQuery(selectedProduct?.category?.id);

  const [currentImage, setCurrentImage] = useState(0);

  // Check if the product details are still loading
  if (isLoading) {
    return <Loading />;
  }

  // Check if there was an error fetching product details
  if (isError) {
    return <div>Error fetching product details.</div>;
  }

  // Check if the product details are available
  if (!selectedProduct) {
    return <div>No product details available.</div>;
  }

  const switchImage = (index) => {
    setCurrentImage(index);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(selectedProduct));
  };

  return (
    <>
      <MainLayout>
        <div
          style={{
            display: "flex",
            maxWidth: "1200px",
            margin: "auto",
            marginTop: "100px",
            gap: "20px",
          }}
        >
          <div>
            <InnerImageZoom
              src={selectedProduct.images[currentImage]}
              zoomSrc={selectedProduct.images[currentImage]}
            />
            <div style={{ display: "flex", gap: "10px" }}>
              {selectedProduct.images.map((image, index) => (
                <img
                  key={index}
                  style={{ width: "100px", cursor: "pointer" }}
                  src={image}
                  alt=""
                  onClick={() => switchImage(index)}
                />
              ))}
            </div>
          </div>
          <div>
            <h2>Product Details</h2>
            <p>Product ID: {selectedProduct.id}</p>
            <p>Title: {selectedProduct.title}</p>
            <p>Description: {selectedProduct.description}</p>
            <p>Price per unit: ${selectedProduct.price}</p>
            <Button variant="contained" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </div>
        </div>

        <h2>Related Products</h2>

        <RelatedSliderProduct
          data={relatedProductsData ?? []}
          filterFunction={(products) =>
            products.filter((product) => product.id !== selectedProduct.id)
          }
          mapFunction={(product) => (
            <div key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img
                  style={{ width: 300 }}
                  src={product.images[0]}
                  alt={product.name}
                />
              </Link>
              <p>{product.title}</p>
            </div>
          )}
        />

        {/* <RelatedSliderProduct>
          {(relatedProductsData ?? [])
            ?.filter((product) => product.id !== selectedProduct.id)
            ?.map((product) => (
              <div key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <img
                    style={{ width: 300 }}
                    src={product.images[0]}
                    alt={product.name}
                  />
                </Link>
                <p>{product.title}</p>
              </div>
            ))}
        </RelatedSliderProduct> */}
      </MainLayout>
    </>
  );
};

export default ProductDetails;
