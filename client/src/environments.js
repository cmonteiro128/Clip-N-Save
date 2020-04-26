const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://example.com'
    : 'http://localhost:1337/';
export default baseURL;
