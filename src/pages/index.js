import LayoutDefault from 'components/layout/LayoutDefault';
import { getMenuData, getAllPosts } from 'lib/api';
import PostList from 'components/common/PostList';

export default function Index({ props }) {
  // if (!props) {
  //   console.log('bbb');
  //   return '';
  // }
  // console.log(props.allPostsData);
  // console.log('ccc');
  return (
    <LayoutDefault title='Index' menuData={props.menusData}>
      <main className='main w-full'>
        <div className='inner px-8'>
          <h2 className='c-tail mb-8'>すべての記事</h2>
          <PostList propsPosts={props.allPostsData} />

          {/* <div className=''>text</div>
          <h3 className='c-tail with-margin'>オプション</h3>
          <div className=''>test</div>
          <h4 className='c-tail with-margin'>h4.c-tail</h4>
          <div className=''>test</div>
          <h5 className='c-tail with-margin'>h5.c-tail</h5>
          <div className=''>test</div>
          <h6 className='c-tail with-margin'>h6.c-tail</h6>
          <div className=''>test</div> */}
        </div>
      </main>
    </LayoutDefault>
  );
}

export async function getStaticProps() {
  let props = {};
  props.menusData = await getMenuData();
  const query = {
    type: 'posts',
    // orderby: 'date',
    // per_page: process.env.PER_PAGES,
    // page: 1,
    // categories: [],
    // tags: [],
    // search: '',
    // _embed: 1,
    info: 'Index',
  };
  props.allPostsData = await getAllPosts(query);
  // console.log(props.allPostsData);
  // console.log('aaa');
  return {
    props: { props },
    revalidate: 5,
  };
}
