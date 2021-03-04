import LayoutDefault from 'components/layout/LayoutDefault';
import { getAllPosts, getMenuData } from 'lib/api';
import PostList from 'components/common/PostList';

export default function SearchWord({ props }) {
  if (!props) {
    return <div>Loading...</div>;
  }
  return (
    <LayoutDefault title='Search' menuData={props.menusData}>
      <main className='main w-full'>
        <div className='inner px-8'>
          <h2 className='c-tail mb-8'>検索: {props.name}</h2>
          <PostList propsPosts={props.allPostsData} />
        </div>
      </main>
    </LayoutDefault>
  );
}

export async function getServerSideProps(context) {
  let props = {};
  props.menusData = await getMenuData();

  const keyword = encodeURI(context.query.search_word);
  props.name = context.query.search_word;
  // console.log(encodeURI(keyword));

  let query = [];
  if (keyword) {
    query = {
      search: keyword,
    };

    props.allPostsData = await getAllPosts(query);
  }

  return {
    props: { props },
  };
}
