import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts } from '../../redux/features/serach/searchSlice';
import { Link } from 'react-router-dom';

const Search = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.search.data);
    const loading = useSelector((state) => state.search.loading);
    const error = useSelector((state) => state.search.error);
    const [searchQuery, setSearchQuery] = useState('');
    const [isInputFocused, setIsInputFocused] = useState(false);
    const searchResultsRef = useRef(null);
    const inputSearchRef = useRef(null);

    const handleSearch = () => {
        // dispatch(searchProducts(searchQuery));
        // setIsInputFocused(true);

        if (!searchQuery.trim()) {
            // If the input is empty or contains only whitespace, focus on the input field
            inputSearchRef.current.focus();
        } else {
            // If the input has a value, dispatch the search and show results
            dispatch(searchProducts(searchQuery));
            setIsInputFocused(true);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            dispatch(searchProducts(searchQuery));
            setIsInputFocused(true);
        }
    };


    const handleDocumentClick = (e) => {
        // Check if the click is outside the search results section
        if (searchResultsRef.current && !searchResultsRef.current.contains(e.target)) {
            setIsInputFocused(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
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
                onKeyPress={handleKeyPress}
                ref={inputSearchRef} 
            />
            <button onClick={handleSearch}>Search</button>


            {error && <p>Error: {error}</p>}

            {showSearchResults && (
                <div

                    style={{
                        position: 'absolute',
                        background: 'chocolate',
                        zIndex: 1111111111,
                        height: '300px',
                        width: "300px",
                        overflowY: 'scroll',
                        padding: '10px',
                    }}
                >
            <p>Here is your search keyword '{searchQuery}'</p>

                    {loading && <p>Loading...</p>}

                    {products.length === 0 && (
                        <p>No results found to '{searchQuery}'. Press Enter different keyword</p>
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
