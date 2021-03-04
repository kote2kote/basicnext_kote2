import Link from 'next/link';
import Image from 'next/image';
import uniqid from 'uniqid';
export default function PostList({ propsPosts }) {
  function setWordCount(str, l = 80) {
    if (str.length > l) {
      str = str.substring(0, l - 1) + '…';
      return str;
    }
  }
  if (!propsPosts) {
    return <div>Loading...</div>;
  }
  return (
    <div className='PostList'>
      <ul>
        {propsPosts.map((n) => (
          <li key={uniqid()} className='p-4 relative z-10 hover:bg-gray-300 cursor-pointer"'>
            <a className='card-link' href={`/post/${n.slug}`}>
              <h4 className='c-tail mb-4'>{n.title.rendered}</h4>
              <div className='flex'>
                <figure className='inline-block'>
                  <Image
                    src={n.featured_image.src}
                    width={300}
                    height={200}
                    alt=''
                    className='object-cover'
                  />
                </figure>
                <div className='w-full px-6'>
                  <div dangerouslySetInnerHTML={{ __html: setWordCount(n.excerpt.rendered) }}></div>

                  <div className='pt-4'>
                    <span className='font-bold'>カテゴリ: </span>
                    <span className='inline-block px-1'>
                      <Link href={`/category/${n.categories[0].slug}`}>
                        <a className='relative underline'>{n.categories[0].name}</a>
                      </Link>
                    </span>
                  </div>

                  <div className='pt-2'>
                    <span className='font-bold'>タグ: </span>
                    {n.tags.map((nn) => (
                      <span key={uniqid()} className='inline-block px-1'>
                        <Link href={`/tag/${nn.slug}`}>
                          <a className='relative underline'>{nn.name}</a>
                        </Link>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
