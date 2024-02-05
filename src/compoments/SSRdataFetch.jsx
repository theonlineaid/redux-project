import React, { useEffect, useState } from 'react';

async function getData() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(url);
    const productData = await response.json();
    return productData;
}

const SSRdataFetch = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getData();
                setData(result);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to run effect only once on mount

    return (
        <>
            <div>
                {data.map((d, idx) => (
                    <p key={idx}>{d.title}</p>
                ))}
            </div>
        </>
    );
}

export default SSRdataFetch;
