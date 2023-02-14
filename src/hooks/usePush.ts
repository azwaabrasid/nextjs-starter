import React from 'react';
import { useRouter } from 'next/router';

import type { NextRouter } from 'next/router';

/**
 * This is due to a bug in useRouter that requires the changing router to be included
 * as dependencies in a useEffect hook, leading to unwanted loops.
 *
 * https://stackoverflow.com/questions/69203538/useeffect-dependencies-when-using-nextjs-router
 */
export const usePush = (): NextRouter['push'] => {
  const router = useRouter();
  const routerRef = React.useRef(router);

  routerRef.current = router;

  const [{ push }] = React.useState<Pick<NextRouter, 'push'>>({
    push: path => routerRef.current.push(path)
  });

  return push;
};
