import LayoutDefault from 'components/layout/LayoutDefault';
import { getAllPosts, getMenuData, getAllTagSlugs, getTagData } from 'lib/api';
import PostList from 'components/common/PostList';

export default function Tag({ props }) {
  if (!props) {
    return <div>Loading...</div>;
  }
  return (
    <LayoutDefault title='Tag' menuData={props.menusData}>
      <main className='main w-full'>
        <div className='inner px-8'>
          <h2 className='c-tail mb-8'>タグ: {props.name}</h2>
          <PostList propsPosts={props.allPostsData} />
        </div>
      </main>
    </LayoutDefault>
  );
}

export async function getStaticPaths() {
  const paths = await getAllTagSlugs();
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  let props = {};
  props.menusData = await getMenuData();

  const tmpSlug = await params.tag;
  const tmpData = await getTagData(tmpSlug);
  props.name = tmpData[0].name;

  // 404
  if (!tmpData.length) {
    console.log('404');
    return {
      notFound: true,
    };
  }

  let query = [];
  if (tmpData.length !== 0) {
    query = {
      tags: tmpData[0].id,
      info: `tag getStaticProps ${tmpData[0].slug}`,
    };
    props.allPostsData = await getAllPosts(query);
  }

  return {
    props: { props },
    revalidate: 5,
  };
}
