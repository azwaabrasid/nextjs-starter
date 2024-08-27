import { useState, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

import { useCallbackRef } from './useCallbackRef';

export interface Bounds {
  width: number;
  height: number;
}

export const useMeasure = (ref: React.MutableRefObject<HTMLElement | null>) => {
  const [element, attachRef] =
    useCallbackRef<React.MutableRefObject<HTMLElement | null>>();
  const [bounds, setBounds] = useState<Bounds>({ width: 0, height: 0 });

  useEffect(() => {
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

  useEffect(() => {
    if (attachRef) attachRef(ref);
  }, [attachRef, ref]);

  return bounds;
};
