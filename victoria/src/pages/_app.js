import '@/styles/globals.css';
// import React from 'react';
// import ReactDOM from 'react-dom';
import SharedLayout from '../components/layout/Layout';

const App = ({ Component, pageProps }) => (
  <SharedLayout>
    <Component {...pageProps} />
  </SharedLayout>
);

export default App;
