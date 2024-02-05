import React, { useState, useEffect } from 'react';

const DependencyExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This code runs when the component mounts and whenever count changes
    console.log('Component rendered or count changed');

    // Cleanup function
    return () => {
      console.log('Cleanup before re-render or unmount');
      // Perform cleanup tasks here
    };
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Dependency Example</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default DependencyExample;
