const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://clipnsave.azurewebsites.net/'
    : 'http://localhost:1337/';
export default baseURL;
