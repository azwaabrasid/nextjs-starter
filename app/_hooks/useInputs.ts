import React from 'react';

/**
 * Manage simple inputs and change handlers.
 */
export const useInputs = <T>(init: T) => {
  const [inputs, setInputs] = React.useReducer(
    (state: T, newState: Partial<T>): T => ({
      ...state,
      ...newState,
    }),
    init,
  );

  const handleInputs = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { target } = e;
      setInputs({ [target.name]: target.value } as Partial<T>);
    },
    [],
  );

  return React.useMemo(
    () => ({ inputs, setInputs, handleInputs }),
    [inputs, handleInputs],
  );
};
