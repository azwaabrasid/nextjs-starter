import React from 'react';

export const useInFocus = () => {
  const [inFocus, setInFocus] = React.useState(false);

  const handleFocus = () => setInFocus(true);
  const handleBlur = () => setInFocus(false);

  return { inFocus, handleFocus, handleBlur };
};
