// components
import Head from 'next/head';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import Sidebar from 'components/common/Sidebar';

export default function LayoutDefault({
  children,
  title = '',
  thumb = `${process.env.MAIN_URL}/icons/screenshot.png`,
  desc = '',
  menuData,
}) {
  // title生成
  !title ? (title = 'basic') : (title = title + ' | basic');

  return (
    <>
      <div className='inner min-h-screen flex flex-col justify-between'>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
          <meta name='description' content={desc} />
          <meta property='og:image' content={thumb} />
          <meta property='og:site_name' content='basic' />
          <meta property='fb:app_id' content='' />
          <meta property='twitter:card' content={thumb} />
          <meta property='twitter:site' content='@kote2' />
          <meta property='og:image:secure_url' content={thumb} />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='900' />
          <meta name='theme-color' content='#000000' />
          <meta name='format-detection' content='email=no,telephone=no,address=no' />
          {/* windows */}
          <meta name='msapplication-square70x70logo' content='/icons/site-tile-70x70.png' />
          <meta name='msapplication-square150x150logo' content='/icons/site-tile-150x150.png' />
          <meta name='msapplication-wide310x150logo' content='/icons/site-tile-310x150.png' />
          <meta name='msapplication-square310x310logo' content='/icons/site-tile-310x310.png' />
          <meta name='msapplication-TileColor' content='#000' />
          {/* safari */}
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='#000' />
          <meta name='apple-mobile-web-app-title' content='basic' />
          {/* 一般 */}
          <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon-180x180.png' />
          <link rel='icon' href='/icons/favicon.ico' />
          <link rel='icon' sizes='192x192' href='/icons/icon-192x192.png' />
          <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' />
          <link rel='manifest' href='/manifest.json' />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        /> */}

          {/* Google Tag Manager - Global base code */}
          {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', '${GTM_ID}');
              `,
          }}
        /> */}
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
