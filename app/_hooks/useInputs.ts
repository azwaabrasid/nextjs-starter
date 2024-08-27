import { useReducer, useCallback, useMemo } from 'react';

/**
 * Manage simple inputs and change handlers.
 */
export const useInputs = <T>(init: T) => {
  const [inputs, setInputs] = useReducer(
    (state: T, newState: Partial<T>): T => ({
      ...state,
      ...newState,
    }),
    init,
  );

  const handleInputs = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { target } = e;
      setInputs({ [target.name]: target.value } as Partial<T>);
    },
    [],
  );

  return useMemo(
    () => ({ inputs, setInputs, handleInputs }),
    [inputs, handleInputs],
  );
};
