import '@/styles/globals.css';
// import React from 'react';
// import ReactDOM from 'react-dom';
import SharedLayout from '../components/layout/Layout';
import { BreakpointProvider } from 'react-socks';

const App = ({ Component, pageProps }) => (
  <BreakpointProvider>
    <SharedLayout>
      <Component {...pageProps} />
    </SharedLayout>
  </BreakpointProvider>
);

export default App;
