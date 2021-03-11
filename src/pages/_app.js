// redux
import { Provider } from 'react-redux';
import store from '../../store';
// import GoogleTagManager from '../common/components/utils/GoogleTagManager';

// style
import 'tailwindcss/tailwind.css';
import 'assets/scss/style.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    //   <Provider store={store}>
    //   <GoogleTagManager>
    //     <Component {...pageProps} />
    //   </GoogleTagManager>
    // </Provider>
  );
}

export default MyApp;
