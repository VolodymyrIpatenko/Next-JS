import '@/styles/globals.css';
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
