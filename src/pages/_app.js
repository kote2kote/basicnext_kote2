// redux
import { Provider } from 'react-redux';
import store from '../../store';

// style
import 'tailwindcss/tailwind.css';
import 'assets/scss/style.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
