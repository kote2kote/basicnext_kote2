import Head from 'next/head';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import Sidebar from 'components/common/Sidebar';

export default function LayoutDefault({ children, title = '' }) {
  return (
    <>
      <div className='inner min-h-screen flex flex-col justify-between'>
        <Head>
          <title>{title}</title>
        </Head>

        <Header />

        <div className='flex flex-grow pt-4'>
          <Sidebar />
          {children}
        </div>

        <Footer />
      </div>
    </>
    // <div className='min-h-screen'>
    //   <Head>
    //     <title>{title}</title>
    //   </Head>
    //   <main>{children}</main>
    // </div>
  );
}
