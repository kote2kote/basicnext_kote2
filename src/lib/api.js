import fetch from 'node-fetch';

// ==================================================
// getMenuData
// ==================================================
export async function getMenuData() {
  const res = await fetch(process.env.MAIN_MENU_API);
  const tmpMenuData = await res.json();

  // ===========> menuにはslugがないのでカテゴリデータのslugを結合
  const res2 = await fetch(new URL(`${process.env.MAIN_REST_API}/categories?per_page=100`));
  const tmpCatData = await res2.json();

  let tmpMenuDataEdit = [];
  for (const n of tmpMenuData.items) {
    let tmp = n;
    for (const nn of tmpCatData) {
      if (n.object_id === nn.id) {
        tmp.slug = nn.slug;
      } else {
        tmp.slug = tmp.object_slug;
      }
    }

    // add dir name
    if (tmp.object === 'category') {
      tmp.dir = 'category';
    } else if (tmp.object === 'page') {
      tmp.dir = 'page';
    } else {
      tmp.dir = 'cpt';
    }
    tmpMenuDataEdit.push(tmp);
  }
  return tmpMenuDataEdit;
}

// ==================================================
// 記事一覧の取得
// ==================================================
export async function getAllPosts(query) {
  console.log(query);
  let tmpPosts = [];
  let i = 1;

  const newQuery = `
    ${process.env.MAIN_REST_API}/posts?_embed&per_page=${
    query.per_page ? query.per_page : process.env.PER_PAGES
  }&page=${query.page ? query.page : i}&categories=${
    query.categories ? query.categories : []
  }&categories_exclude=1&tags=${query.tags ? query.tags : []}&search=${
    query.search ? query.search : ''
  }
    `;
  console.log(newQuery);
  // tmpPosts = await this.$axios.$get(newQuery);
  const res = await fetch(newQuery);
  tmpPosts = await res.json();
  // console.log(tmpPosts);

  return tmpPosts;
}

// ==================================================
// getAllPostSlugs
// ==================================================
export async function getAllPostSlugs() {
  // let slugs = [];
  const i = 1;
  // for (let i = 1; i < 12; i++) {
  // const element = array[index];
  const res = await fetch(`${process.env.MAIN_REST_API}/posts?per_page=100&page=${i}&_embed=1`);
  const tmp = await res.json();
  //   console.log(tmp[0]);
  //   for (let n of tmp) {
  //     slugs.push(n.slug);
  //   }
  // }

  return tmp.map((slug) => {
    return {
      params: {
        slug: String(slug),
      },
    };
  });
}

// ==================================================
// getPost
// ==================================================
export async function getPost(slug) {
  const res = await fetch(`${process.env.MAIN_REST_API}/posts?_embed&slug=${slug}`);
  const tmp = await res.json();
  // console.log(post[0]);
  const tmpPost = tmp[0];
  console.log(tmpPost.name);

  return tmpPost;
}
