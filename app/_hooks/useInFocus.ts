import { useState, useMemo } from 'react';

export const useInFocus = () => {
  const [inFocus, setInFocus] = useState(false);

  const handleFocus = () => setInFocus(true);
  const handleBlur = () => setInFocus(false);

  return useMemo(() => ({ inFocus, handleFocus, handleBlur }), [inFocus]);
};
