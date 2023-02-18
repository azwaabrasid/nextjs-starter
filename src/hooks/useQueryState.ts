import { useRouter } from 'next/router';
import React from 'react';

import type { ParsedUrlQuery } from 'querystring';

export const stringParam = (param: string | string[] | undefined) =>
  param ? (Array.isArray(param) ? param[0] : param) : '';

const removeEmptyParams = (query: ParsedUrlQuery) => {
  const sanitizedQuery: ParsedUrlQuery | undefined = {};

  Object.keys(query).forEach((key) => {
    if (query[key]) sanitizedQuery[key] = query[key];
  });

  return Object.keys(sanitizedQuery).length ? sanitizedQuery : undefined;
};

/**
 * Controls state using url query params.
 */
export const useQueryState = <T>(
  decoder: (query: ParsedUrlQuery) => T,
  encoder?: (newState: T) => ParsedUrlQuery
): [T | undefined, (newState: T) => void] => {
  const router = useRouter();
  const [state, setState] = React.useState<T>();

  React.useEffect(() => {
    if (!router.isReady) return;
    setState(decoder(router.query));
  }, [router.isReady, router.query, decoder]);

  const updateQuery = React.useCallback(
    (newState: T | ParsedUrlQuery) => {
      const query = encoder
        ? encoder(newState as T)
        : removeEmptyParams(newState as ParsedUrlQuery);

      router.replace({ query }, undefined, {
        shallow: true,
      });
    },
    [router, encoder]
  );

  return [state, updateQuery];
};
