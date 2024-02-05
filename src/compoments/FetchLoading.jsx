import React, { useState, useEffect } from 'react';

const DataFetchingExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set loading to true before making the request
        setLoading(true);

        // Make the API request
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();

        // Set the data in the state
        setData(result);
      } catch (error) {
        // Set the error in the state if the request fails
        setError(error);
      } finally {
        // Set loading to false after the request is complete, whether it was successful or not
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array ensures that this effect runs only once (on mount)

  // Render UI based on loading, data, and error states
  return (
    <div>
      <h1>Data Fetching Example</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {/* {data && (
        <div>
          <h2>Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )} */}


      {
        data &&  data.map((d, idx) => (<p key={d.id}>{idx} {d.title}</p>))
      }
    </div>
  );
};

export default DataFetchingExample;
