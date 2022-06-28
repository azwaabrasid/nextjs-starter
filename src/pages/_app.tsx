import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import 'styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="app">
    <Head>
      <title>NextJS Starter</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </div>
);

export default MyApp;
