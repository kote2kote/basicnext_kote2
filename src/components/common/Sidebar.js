import Link from 'next/link';
import { useForm } from 'react-hook-form';
export default function Sidebar({ menuData = [] }) {
  // form
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    location.href = `/search/${data.search}`;
  };

  return (
    <aside className='aside px-4'>
      <style jsx>
        {`
          .aside {
            width: 300px;
          }
        `}
      </style>

      {/* 検索 */}
      <div className='search'>
        <h5 className='c-tail'>検索</h5>
        <div className='pt-3'>
          <fieldset className='submenu-search-fieldset px-3 pb-8'>
            <label htmlFor='search' className='hidden'>
              search
            </label>

            <div className='relative'>
              <input
                ref={register()}
                id='search'
                name='search'
                type='text'
                className='appearance-none rounded-full w-full py-2 pl-4 pr-10 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                placeholder='search word'
              />
              <button onClick={handleSubmit(onSubmit)} className='inline-block w-4 absolute'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </div>
          </fieldset>
        </div>
      </div>

      {/* メニュー */}
      <div className='menu'>
        <h5 className='c-tail'>カテゴリメニュー</h5>
        <ul>
          <li>
            <Link href='/'>
              <a className='underline'>トップページ</a>
            </Link>
          </li>
          {menuData.length !== 0 &&
            menuData.map((n) => (
              <li key={n.id}>
                <Link href={`/${n.dir}/${n.slug}`}>
                  <a className='underline'>{n.title}</a>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
}
