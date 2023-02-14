import React from 'react';

type TLoaderType = 'SET' | 'FREE' | 'LOAD' | 'ERROR';

export interface Loader {
  loading: boolean;
  error: boolean;
}

export interface LoaderDispatch {
  type: TLoaderType;
  payload?: Loader;
}

const loaderInit = (initial?: Loader) => {
  if (initial) return initial;
  return { loading: false, error: false };
};

const loaderReducer = (prevState: Loader, action: LoaderDispatch): Loader => {
  switch (action.type) {
    case 'SET':
      return action.payload ? action.payload : { loading: false, error: false };
    case 'FREE':
      return { loading: false, error: false };
    case 'LOAD':
      return { loading: true, error: false };
    case 'ERROR':
      return { loading: false, error: true };
    default:
      return prevState;
  }
};

export const useLoader = (
  initial?: Loader
): [Loader, React.Dispatch<LoaderDispatch>] => {
  const [loader, dispatchLoader] = React.useReducer<
    (prevState: Loader, action: LoaderDispatch) => Loader,
    Loader | undefined
  >(loaderReducer, initial, loaderInit);

  return [loader, dispatchLoader];
};
