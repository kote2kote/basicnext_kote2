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
        {menuData &&
          menuData.map((n) => (
            <li>
              <Link href={`/${n.dir}/${n.slug}`}>
                <a>{n.title}</a>
              </Link>
            </li>
          ))}
        {/* {menuData &&
          menuData.map(
            (n) =>
              n.object === 'category' && (
                <li>
                  <Link href={`/category/${n.slug}`}>
                    <a>{n.title}</a>
                  </Link>
                </li>
              ),
            n.object === 'page' && (
              <li>
                <Link href={`/category/${n.object_slug}`}>
                  <a>{n.title}</a>
                </Link>
              </li>
            ),
            n.object !== 'category' && n.object !== 'page' && (
              <li>
                <Link href={`/cpt/${n.object_slug}`}>
                  <a>{n.title}</a>
                </Link>
              </li>
            )
          )} */}
      </ul>
    </aside>
  );
}
