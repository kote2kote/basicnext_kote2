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
