import { useState, useCallback, useMemo } from 'react';

export const useCallbackRef = <T>(): [T | null, (node: T | null) => void] => {
  const [ref, setRef] = useState<T | null>(null);

  const fn = useCallback((node: T | null) => {
    setRef(node);
  }, []);

  return useMemo(() => [ref, fn], [ref, fn]);
};
