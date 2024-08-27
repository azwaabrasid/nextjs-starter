import { useCallback } from 'react';

export const useEnter = (func: () => void) =>
  useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        func();
      }
    },
    [func],
  );
