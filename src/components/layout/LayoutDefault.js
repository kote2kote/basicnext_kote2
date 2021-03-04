// components
import Head from 'next/head';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import Sidebar from 'components/common/Sidebar';

export default function LayoutDefault({ children, title = '', menuData }) {
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
