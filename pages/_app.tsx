import '../styles/globals.css';
import { theme } from '@closet-design-system/theme-connect';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import store from '../src/store/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
