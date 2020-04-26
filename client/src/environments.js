const baseURL =
  process.env.NODE_ENV === 'production'
    ? process.env.API_URL // add --env.API_URL=https://example.com/ when using build locally
    : 'http://localhost:1337/';
export default baseURL;
