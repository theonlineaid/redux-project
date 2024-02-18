// ProductDetails.js
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails } from '../redux/features/product/productSlice';
import { addToCart, decrementQuantity, incrementQuantity } from '../redux/features/cart/cartSlice';
import InnerImageZoom from 'react-inner-image-zoom';
import MainLayout from '../layout/MainLayout';
import { fetchRelatedProducts } from '../redux/features/product/relatedProductSlice';
import Loading from '../compoments/Loading';
import RelatedSliderProduct from '../compoments/RelatedSliderProduct';
import { Button } from '@mui/material';
import { useGetProductIDQuery } from '../redux/services/productsApi';

const ProductDetails = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const selectedProduct = useSelector((state) => state.product.selectedProduct);
    const relatedProducts = useSelector((state) => state.relatedProduct.relatedProducts);
    const isLoading = useSelector((state) => state.product.detailsLoading);
    const isError = useSelector((state) => state.product.detailsError);


    const {data} = useGetProductIDQuery(productId)
    console.log(data, 25)

    const [currentImage, setCurrentImage] = useState(0);

    // Fetch product details using the productId
    useEffect(() => {
        dispatch(fetchProductDetails(productId));
    }, [dispatch, productId]);

    // Fetch related products when selectedProduct is available
    useEffect(() => {
        if (selectedProduct) {
            dispatch(fetchRelatedProducts(selectedProduct.category.id));
        }
    }, [dispatch, selectedProduct]);

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
                <div style={{ display: "flex", maxWidth: '1200px', margin: 'auto', marginTop: '100px', gap: '20px' }}>
                    <div>
                        <InnerImageZoom src={selectedProduct.images[currentImage]} zoomSrc={selectedProduct.images[currentImage]} />
                        <div style={{ display: 'flex', gap: '10px' }}>
                            {selectedProduct.images.map((image, index) => (
                                <img
                                    key={index}
                                    style={{ width: '100px', cursor: 'pointer' }}
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
                        <Button variant="contained" onClick={handleAddToCart}>Add to Cart</Button>
                    </div>
                </div>

                <h2>Related Products</h2>
                {relatedProducts.length > 0 && (
                    <RelatedSliderProduct >
                        {/* Exclude the selected product from the list */}
                        {relatedProducts
                            .filter(product => product.id !== selectedProduct.id)
                            .map((product) => (
                                <div key={product.id}>
                                    <Link to={`/product/${product.id}`}>
                                        <img style={{ width: 300 }} src={product.images[0]} alt={product.name} />
                                    </Link>
                                    <p>{product.title}</p>
                                    {/* Display other related product details */}
                                </div>
                            ))}
                    </RelatedSliderProduct>
                )}
            </MainLayout>
        </>
    );
};

export default ProductDetails;
