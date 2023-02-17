import React from 'react';
import ResizeObserver from 'resize-observer-polyfill';

import { useCallbackRef } from './useCallbackRef';

export interface Bounds {
  width: number;
  height: number;
}

export const useMeasure = (ref: React.MutableRefObject<HTMLElement | null>) => {
  const [element, attachRef] =
    useCallbackRef<React.MutableRefObject<HTMLElement | null>>();
  const [bounds, setBounds] = React.useState<Bounds>({ width: 0, height: 0 });

  React.useEffect(() => {
    const onResize = ([entry]: ResizeObserverEntry[]) => {
      setBounds({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    };

    const observer = new ResizeObserver(onResize);

    if (element && element.current) {
      observer.observe(element.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [element]);

  React.useEffect(() => {
    if (attachRef) attachRef(ref);
  }, [attachRef, ref]);

  return bounds;
};
