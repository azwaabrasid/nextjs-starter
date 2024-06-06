import React from 'react';

export const useCallbackRef = <T>(): [T | null, (node: T | null) => void] => {
  const [ref, setRef] = React.useState<T | null>(null);

  const fn = React.useCallback((node: T | null) => {
    setRef(node);
  }, []);

  return [ref, fn];
};
