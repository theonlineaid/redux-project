import React, { useState, useEffect } from 'react';

const RenderExample = () => {
  const [count, setCount] = useState(0);

  // useEffect for rendering process-related tasks
  useEffect(() => {
    // This code runs after every render
    console.log('Component rendered why ?');

    // You can perform any rendering process-related tasks here
    // For example, you might want to update the document title
    document.title = `Count: ${count}`;

    // The cleanup function, if needed, runs before the next render or unmount
    return () => {
      console.log('Cleanup before re-render or unmount');
      // You can perform cleanup tasks here if necessary
    };
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Render Example</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default RenderExample;
