import LayoutDefault from 'components/layout/LayoutDefault';
import { getMenuData, getAllPosts } from 'lib/api';
import PostList from 'components/common/PostList';

export default function Index({ props }) {
  if (!props) {
    return <div>Loading...</div>;
  }
  return (
    <LayoutDefault title='Index' menuData={props.menusData}>
      <main className='main w-full'>
        <div className='inner px-8'>
          <h2 className='c-tail mb-8'>すべての記事</h2>
          <PostList propsPosts={props.allPostsData} />
        </div>
      </main>
    </LayoutDefault>
  );
}

export async function getStaticProps() {
  let props = {};
  props.menusData = await getMenuData();
  const query = {
    info: 'Index',
  };
  props.allPostsData = await getAllPosts(query);

  return {
    props: { props },
    revalidate: 5,
  };
}
