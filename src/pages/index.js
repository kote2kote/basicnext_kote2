import LayoutDefault from 'components/layout/LayoutDefault';
import { getMenuData } from 'lib/api';

export default function Index({ props }) {
  return (
    <LayoutDefault title='Index' menuData={props.menus}>
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

export async function getStaticProps() {
  let props = {};
  props.menus = await getMenuData();
  // const query = {
  //   type: 'posts',
  //   // orderby: 'date',
  //   per_page: process.env.blogNumOfDis,
  //   // page: 1,
  //   // categories: [],
  //   // tags: [],
  //   // search: '',
  //   // _embed: 1,
  //   info: 'index getStaticProps',
  // };
  // props.posts = await getAllPosts(query);
  return {
    props: { props },
    // revalidate: 5,
  };
}
