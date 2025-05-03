// import '../styles/globals.scss';
//import '../i18n';
import { appWithTranslation } from 'next-i18next';
import ErrorBoundary from '../components/ErrorBoundary';

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default appWithTranslation(MyApp);
