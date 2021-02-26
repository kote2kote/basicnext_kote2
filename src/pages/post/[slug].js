import Link from 'next/link';
import Image from 'next/image';
import LayoutDefault from 'components/layout/LayoutDefault';
import { getMenuData, getAllPostSlugs, getPost } from 'lib/api';

export default function Index({ props }) {
  if (!props) {
    return <div>Loading...</div>;
  }
  return (
    <LayoutDefault title='Index' menuData={props.menusData}>
      <main className='main w-full'>
        <div className='inner px-8'>
          <h2 className='c-tail'>{props.postData.title.rendered}</h2>
          <div class='inner'>
            <div class='w-full flex pb-8'>
              <div class='inline-block pr-2'>
                <span class='font-bold'>カテゴリ: </span>
                <span class='inline-block px-1'>
                  <Link href={`/category/${props.postData.categories[0].slug}`}>
                    <a className='relative underline'>{props.postData.categories[0].name}</a>
                  </Link>
                </span>
              </div>

              <div class='inline-block'>
                <span class='font-bold'>タグ: </span>

                {props.postData.tags.map((nn) => (
                  <span key={nn.id} className='inline-block px-1'>
                    <Link href={`/tag/${nn.slug}`}>
                      <a className='relative underline'>{nn.name}</a>
                    </Link>
                  </span>
                ))}
              </div>
            </div>

            <div class='text-center pb-12'>
              <Image
                src={props.postData.featured_image.src}
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
  const paths = await getAllPostSlugs();

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  let props = {};
  props.menusData = await getMenuData();

  const slug = await params.slug;
  props.postData = await getPost(slug);

  return {
    props: {
      props,
    },
    revalidate: 5,
  };
}
