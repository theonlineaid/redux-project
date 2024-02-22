import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../../redux/features/serach/searchSlice";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";
import { useGetSearchQuery } from "../../redux/services/productsApi";

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { data: products, isLoading, error } = useGetSearchQuery(searchQuery);

  const [isInputFocused, setIsInputFocused] = useState(false);
  const searchResultsRef = useRef(null);
  const inputSearchRef = useRef(null);

  const theme = useTheme();

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      // If the input is empty or contains only whitespace, focus on the input field
      inputSearchRef.current.focus();
    } else {
      // If the input has a value, dispatch the search and show results
      dispatch(searchProducts(searchQuery));
      setIsInputFocused(true);

      // Update the URL with the new search query
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatch(searchProducts(searchQuery));
      setIsInputFocused(true);
    }
  };

  const handleDocumentClick = (e) => {
    // Check if the click is outside the search results section
    if (
      searchResultsRef.current &&
      !searchResultsRef.current.contains(e.target)
    ) {
      setIsInputFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  // const showSearchResults = isInputFocused && location.pathname === '/';
  const showSearchResults = isInputFocused;

  return (
    <div ref={searchResultsRef}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        ref={inputSearchRef}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p>Error: {error}</p>}

      {showSearchResults && (
        <div
          style={{
            position: "absolute",
            background: theme.palette.info.main,
            zIndex: 1111111111,
            height: "300px",
            width: "300px",
            overflowY: "scroll",
            padding: "10px",
          }}
        >
          <p>Here is your search keyword '{searchQuery}'</p>

          {isLoading && <p>Loading...</p>}

          {products.length === 0 && (
            <p>
              No results found to '{searchQuery}'. Press Enter different keyword
            </p>
          )}

          {products.map((product) => (
            <div key={product.id}>
              <Link to={`/product/${product.id}`}>
                <p>{product.title}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
