// components
import Head from 'next/head';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import Sidebar from 'components/common/Sidebar';

// redux
import { getTestState, setTest } from 'lib/slices/testSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function LayoutDefault({ children, title = '', menuData }) {
  // ===========> open/close menu
  const testState = useSelector(getTestState);
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

        <div className='flex flex-grow pt-4'>
          <Sidebar menuData={menuData} />
          {children}
        </div>

        <Footer />
      </div>
    </>
  );
}
