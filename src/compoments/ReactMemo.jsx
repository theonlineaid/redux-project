import React, { memo, useMemo } from 'react';
import DataFetchingExample from './FetchLoading';

const ReactMemo = () => {
  // Using useMemo to memoize the DataFetchingExample component
  const MemoizedDataFetchingExample = useMemo(() => memo(DataFetchingExample), []);

  // ...

  const someDataPassedAsProp = {};

  return <MemoizedDataFetchingExample data={someDataPassedAsProp} />;
};

export default ReactMemo;