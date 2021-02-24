module.exports = {
  env: {
    MAIN_URL: process.env.NODE_ENV === 'production' ? process.env.PROD_URL : process.env.DEV_URL,
    MAIN_REST_API:
      process.env.NODE_ENV === 'production' ? process.env.PROD_REST_API : process.env.DEV_REST_API,
    MAIN_MENU_API:
      process.env.NODE_ENV === 'production' ? process.env.PROD_MENU_API : process.env.DEV_MENU_API,
  },
};
