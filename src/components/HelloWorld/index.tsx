import React from 'react';

import style from './index.module.scss';

export const HelloWorld = () => (
  <div className={`flex flex-col items-center gap-4 ${style.container}`}>
    <h1 className="text-2xl font-bold">Hello World</h1>
  </div>
);
