import React from 'react';

export const useToggle = (
  init = false,
): [boolean, () => void, React.Dispatch<boolean>] => {
  const [state, setState] = React.useState(init);
  const toggle = React.useCallback(() => setState((prev) => !prev), []);

  return React.useMemo(() => [state, toggle, setState], [state, toggle]);
};
