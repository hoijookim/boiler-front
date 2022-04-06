import { AppProps, NextWebVitalsMetric } from 'next/app';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const App = ({ Component, pageProps }: AppProps) => {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <meta charSet="utf-8" />
          <title>App</title>
          <style>
          {`html, body {
              margin: 0;
              padding: 0;
              overflow: initial !important;
            }
            body {
                height:100%
                font-size: 15px;
                line-height: 1.46668;
                font-weight: 400;
                font-variant-ligatures: common-ligatures;
                -moz-osx-font-smoothing: grayscale;
                -webkit-font-smoothing: antialiased;
            }
            * {
                box-sizing: border-box;
            }`}
        </style>
        </Head>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}

export default App;