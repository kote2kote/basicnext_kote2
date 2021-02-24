// components
import Head from 'next/head';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import Sidebar from 'components/common/Sidebar';

// redux
import { getMenuState, setTest } from 'lib/slices/menuSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function LayoutDefault({ children, title = '' }) {
  // ===========> open/close menu
  const menuState = useSelector(getMenuState);
  const dispatch = useDispatch();
  function funcTest() {
    dispatch(setTest());
  }
  funcTest();

  return (
    <>
      <div className='inner min-h-screen flex flex-col justify-between'>
        <Head>
          <title>{title}</title>
        </Head>

        <Header />
        {menuState.test}
        {process.env.MAIN_URL}
        <div className='flex flex-grow pt-4'>
          <Sidebar />
          {children}
        </div>

        <Footer />
      </div>
    </>
  );
}
