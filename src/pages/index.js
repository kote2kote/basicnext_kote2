import LayoutDefault from 'components/layout/LayoutDefault';
export default function Index() {
  return (
    <LayoutDefault title='Index'>
      <main className='main w-full'>
        <div className='inner px-8'>
          <h2 className='c-tail mb-8'>メイン</h2>
          <div className=''>text</div>
          <h3 className='c-tail with-margin'>オプション</h3>
          <div className=''>test</div>
          <h4 className='c-tail with-margin'>h4.c-tail</h4>
          <div className=''>test</div>
          <h5 className='c-tail with-margin'>h5.c-tail</h5>
          <div className=''>test</div>
          <h6 className='c-tail with-margin'>h6.c-tail</h6>
          <div className=''>test</div>
        </div>
      </main>
    </LayoutDefault>
  );
}
