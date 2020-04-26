const baseURL =
  process.env.NODE_ENV === 'production'
    ? process.env.API_URL // add --env.API_URL=https://clipnsave.now.sh/ when using build
    : 'http://localhost:1337/';
export default baseURL;
