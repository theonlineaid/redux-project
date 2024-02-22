import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useGetSearchQuery } from "../../redux/services/productsApi";

export default function SearchResult() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const searchQuery = searchParams.get("q");

  console.log(searchQuery);

  const { data: products, isLoading, error } = useGetSearchQuery(searchQuery);

  const handleGoBack = () => {
    navigate(-1); // Navigate back one step in the history
  };

  return (
    <div style={{ margin: "auto", textAlign: "center" }}>
      <button onClick={handleGoBack}>👈 Go Back</button>
      <h2 style={{ textAlign: "center" }}>
        Search Results for "{searchQuery}"
      </h2>

      {isLoading && <p>Loading...</p>}

      {error && <p>Error: {error.message}</p>}

      {products && products.length === 0 && (
        <p>No results found for '{searchQuery}'</p>
      )}

      {products && products.length > 0 && (
        <>
          {products.map((product) => (
            <div
              key={product.id}
              style={{ margin: "auto", textAlign: "center" }}
            >
              <Link to={`/product/${product.id}`}>
                <div>{product.title}</div>
                <img height={300} width={300} src={product.images[0]} alt="" />
              </Link>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
