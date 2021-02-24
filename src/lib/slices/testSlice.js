import { createSlice } from '@reduxjs/toolkit';

const testSlice = createSlice({
  name: 'menuSlice',
  initialState: {
    test: 'test',
    // menuData: [],
  },
  reducers: {
    setTest: (state, action) => {
      state.test = process.env.MAIN_URL;
    },
    // async getMenuData(state, action) {
    //   const res = await fetch(process.env.MAIN_MENU_API);
    //   const tmpMenuData = await res.json();

    //   // ===========> menuにはslugがないのでカテゴリデータのslugを結合
    //   const res2 = await fetch(new URL(`${process.env.MAIN_REST_API}/categories?per_page=100`));
    //   const tmpCatData = await res2.json();

    //   let tmpMenuDataEdit = [];
    //   for (const n of tmpMenuData) {
    //     let tmp = n;
    //     for (const nn of tmpCatData) {
    //       if (n.object_id === nn.id) {
    //         tmp.slug = nn.slug;
    //       }
    //     }
    //     tmpMenuDataEdit.push(tmp);
    //   }
    //   state.menuData = tmpMenuDataEdit;
    // },
  },
});

export const getTestState = (state) => state.testSlice;
export const { setTest } = testSlice.actions;
export default testSlice.reducer;
