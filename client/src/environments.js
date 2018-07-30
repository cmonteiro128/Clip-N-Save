const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://clipnsave.now.sh/'
    : 'http://localhost:1337/';
export default baseURL;
