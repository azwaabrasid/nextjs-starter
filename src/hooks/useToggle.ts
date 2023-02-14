import React from 'react';

export const useToggle = (
  init = false
): [boolean, () => void, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [state, setState] = React.useState(init);

  const toggle = () => setState(prev => !prev);

  return [state, toggle, setState];
};
