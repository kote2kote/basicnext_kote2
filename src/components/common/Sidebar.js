import Link from 'next/link';
export default function Sidebar({ menuData = [] }) {
  return (
    <aside className='aside px-4'>
      <style jsx>
        {`
          .aside {
            width: 300px;
          }
        `}
      </style>
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
    </aside>
  );
}
