import LayoutDefault from 'components/layout/LayoutDefault';
import { getAllPosts, getMenuData, getCatData, getAllCatSlugs } from 'lib/api';
import PostList from 'components/common/PostList';

export default function Category({ props }) {
  if (!props) {
    return <div>Loading...</div>;
  }
  return (
    <LayoutDefault title='Category' menuData={props.menusData}>
      <main className='main w-full'>
        <div className='inner px-8'>
          <h2 className='c-tail mb-8'>カテゴリ: {props.name}</h2>
          <PostList propsPosts={props.allPostsData} />
        </div>
      </main>
    </LayoutDefault>
  );
}

export async function getStaticPaths() {
  const paths = await getAllCatSlugs();
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  let props = {};
  props.menusData = await getMenuData();

  const tmpCatSlug = await params.category;
  const tmpCatData = await getCatData(tmpCatSlug);
  props.name = tmpCatData[0].name;

  // カテゴリが[]は404
  if (!tmpCatData.length) {
    console.log('404');
    return {
      notFound: true,
    };
  }

  let query = [];
  if (tmpCatData.length !== 0) {
    query = {
      type: 'posts',
      categories: tmpCatData[0].id,
      info: `category getStaticProps ${tmpCatData[0].slug}`,
    };
    props.allPostsData = await getAllPosts(query);
  }

  return {
    props: { props },
    revalidate: 5,
  };
}
