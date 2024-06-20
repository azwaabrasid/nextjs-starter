import React from 'react';

export const useEnter = (func: () => void) =>
  React.useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        func();
      }
    },
    [func],
  );
