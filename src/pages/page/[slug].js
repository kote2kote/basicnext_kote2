import Link from 'next/link';
import Image from 'next/image';
import LayoutDefault from 'components/layout/LayoutDefault';
import { getMenuData, getAllPostSlugs, getPost } from 'lib/api';
import uniqid from 'uniqid';

export default function Index({ props }) {
  if (!props) {
    return <div>Loading...</div>;
  }
  return (
    <LayoutDefault title='Index' menuData={props.menusData}>
      <main className='main w-full'>
        <div className='inner px-8'>
          <h2 className='c-tail mb-8'>{props.postData.title.rendered}</h2>
          <div className='inner'>
            {/* <div className='w-full flex pb-8'>
              <div className='inline-block pr-2'>
                <span className='font-bold'>カテゴリ: </span>
                <span className='inline-block px-1'>
                  <Link href={`/category/${props.postData.categories[0].slug}`}>
                    <a className='relative underline'>{props.postData.categories[0].name}</a>
                  </Link>
                </span>
              </div>

              <div className='inline-block'>
                <span className='font-bold'>タグ: </span>

                {props.postData.tags.map((nn) => (
                  <span key={uniqid()} className='inline-block px-1'>
                    <Link href={`/tag/${nn.slug}`}>
                      <a className='relative underline'>{nn.name}</a>
                    </Link>
                  </span>
                ))}
              </div>
            </div> */}

            <div className='text-center pb-12'>
              <Image
                src={props.postData.thumb}
                width={300}
                height={200}
                alt=''
                className='object-cover'
              />
            </div>
            <div dangerouslySetInnerHTML={{ __html: props.postData.content.rendered }}></div>
          </div>
        </div>
      </main>
    </LayoutDefault>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostSlugs('pages');

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  let props = {};
  props.menusData = await getMenuData();

  let query = {};
  query.slug = await params.slug;
  query.type = 'pages';
  console.log(query);
  props.postData = await getPost(query);

  return {
    props: {
      props,
    },
    revalidate: 5,
  };
}
