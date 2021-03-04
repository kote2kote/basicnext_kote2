import fetch from 'node-fetch';

// ==================================================
// getMenuData
// ==================================================
export async function getMenuData() {
  const res = await fetch(process.env.MAIN_MENU_API);
  const res2 = await res.json();
  const tmpMenuData = res2.items;
  const tmpCatData = await getCatData(); // menuにはslugがないのでカテゴリデータのslugを結合

  // --------------------------------------------------
  // ディレクトリ名とスラッグを結合
  // --------------------------------------------------
  let tmpMenuDataEdit = [];
  for (const n of tmpMenuData) {
    // カテゴリーの場合
    if (n.object === 'category') {
      n.dir = 'category';
      for (const nn of tmpCatData) {
        if (n.object_id === nn.id) {
          n.slug = nn.slug;
        }
      }
    }
    // 固定ページの場合
    else if (n.object === 'page') {
      n.dir = 'page';
      n.slug = n.object_slug;
    }
    // CPTの場合
    else {
      n.dir = 'cpt';
      n.slug = n.object_slug;
    }

    tmpMenuDataEdit.push(n);
  }
  return tmpMenuDataEdit;
}

// ==================================================
// getAllPosts
// ==================================================
export async function getAllPosts(query) {
  // console.log(query);
  let tmpPosts = [];
  let i = 1;

  const newQuery = `
    ${process.env.MAIN_REST_API}/${query.type ? query.type : 'posts'}?_embed&per_page=${
    query.per_page ? query.per_page : process.env.PER_PAGES
  }&page=${query.page ? query.page : i}&categories=${
    query.categories ? query.categories : []
  }&categories_exclude=1&tags=${query.tags ? query.tags : []}&search=${
    query.search ? query.search : ''
  }
    `;
  // console.log(newQuery);
  // tmpPosts = await this.$axios.$get(newQuery);
  const res = await fetch(newQuery);
  tmpPosts = await res.json();
  // console.log(tmpPosts);

  return tmpPosts;
}

// ==================================================
// getAllPostSlugs
// ==================================================
export async function getAllPostSlugs(type = 'posts') {
  // let slugs = [];
  // console.log(type);
  const i = 1;
  // for (let i = 1; i < 12; i++) {
  // const element = array[index];
  const res = await fetch(`${process.env.MAIN_REST_API}/${type}?per_page=100&page=${i}&_embed=1`);
  const tmp = await res.json();
  console.log(tmp);
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
export async function getPost(query) {
  // console.log(query);
  const res = await fetch(
    `${process.env.MAIN_REST_API}/${query.type ? query.type : 'posts'}?_embed&slug=${query.slug}`
  );
  const tmp = await res.json();
  // console.log(post[0]);
  const tmpPost = tmp[0];
  tmpPost.thumb = tmpPost._embedded['wp:featuredmedia'][0].source_url;
  // console.log(tmpPost.name);

  return tmpPost;
}

// ==================================================
// getAllCatSlugs
// ==================================================
export async function getAllCatSlugs() {
  const res = await fetch(`${process.env.MAIN_REST_API}/categories?_embed&per_page=100`);
  const tmp = await res.json();
  // console.log(tmp);

  let tmpCatSlugs = [];
  for (let n of tmp) {
    tmpCatSlugs.push(n.slug);
  }
  // console.log(tmpCatSlugs);

  return tmpCatSlugs.map((slug) => {
    // console.log(slug);
    return {
      params: {
        category: String(slug),
      },
    };
  });
}

// ==================================================
// getCatData
// ==================================================
export async function getCatData(slug = '') {
  const res = await fetch(`${process.env.MAIN_REST_API}/categories?_embed&slug=${slug}`);
  const tmp = await res.json();
  // console.log(tmp);
  // const tmpCatData = tmp[0];
  // console.log(tmpCatData.name);

  return tmp;
}

// ==================================================
// getAllTagSlugs
// ==================================================
export async function getAllTagSlugs() {
  const res = await fetch(`${process.env.MAIN_REST_API}/tags?_embed&per_page=100`);
  const tmp = await res.json();

  let tags = [];
  for (let n of tmp) {
    tags.push(n.slug);
  }
  return tags.map((tag) => {
    return {
      params: {
        tag: String(tag),
      },
    };
  });
}

// ==================================================
// getTagData
// ==================================================
export async function getTagData(slug = '') {
  // console.log('tag');
  // console.log(slug);
  const res = await fetch(`${process.env.MAIN_REST_API}/tags?_embed&slug=${slug}&per_page=100`);
  const tmp = await res.json();
  return tmp;
}
