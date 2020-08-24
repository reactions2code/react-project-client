let apiUrl
const apiUrls = {
  production: 'https://wdi-library-api.herokuapp.com/books',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
