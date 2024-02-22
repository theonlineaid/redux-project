import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import InnerImageZoom from "react-inner-image-zoom";
import MainLayout from "../layout/MainLayout";
import RelatedSliderProduct from "../compoments/RelatedSliderProduct";
import Loading from "../compoments/Loading";
import {
  useGetProductIDQuery,
  useGetRelatedProductQuery,
} from "../redux/services/productsApi";

const ProductDetails = () => {
  const { productId } = useParams();
  const { data: product, isLoading, isError } = useGetProductIDQuery(productId);
  const { data: relatedProducts } = useGetRelatedProductQuery(
    product?.category?.id
  );

  const [currentImage, setCurrentImage] = useState(0);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error fetching product details.</div>;
  }

  if (!product) {
    return <div>No product details available.</div>;
  }

  const switchImage = (index) => {
    setCurrentImage(index);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
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
            src={product.images[currentImage]}
            zoomSrc={product.images[currentImage]}
          />
          <div style={{ display: "flex", gap: "10px" }}>
            {product.images.map((image, index) => (
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
          <p>Product ID: {product.id}</p>
          <p>Title: {product.title}</p>
          <p>Description: {product.description}</p>
          <p>Price per unit: ${product.price}</p>
          <Button variant="contained" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </div>

      <h2>Related Products</h2>
      {relatedProducts && relatedProducts.length > 0 && (
        <RelatedSliderProduct>
          {/* Exclude the selected product from the list */}
          {relatedProducts
            .filter((relatedProduct) => relatedProduct.id !== product.id)
            .map((relatedProduct) => (
              <div key={relatedProduct.id}>
                <Link to={`/product/${relatedProduct.id}`}>
                  <img
                    style={{ width: 300 }}
                    src={relatedProduct.images[0]}
                    alt={relatedProduct.name}
                  />
                </Link>
                <p>{relatedProduct.title}</p>
                {/* Display other related product details */}
              </div>
            ))}
        </RelatedSliderProduct>
      )}
    </MainLayout>
  );
};

export default ProductDetails;
