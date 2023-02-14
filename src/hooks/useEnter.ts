import React from 'react';

export const useEnter = (func: () => void) => {
  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        func();
      }
    },
    [func]
  );

  return handleKeyDown;
};
