let apiUrl
const apiUrls = {
  production: 'https://git.heroku.com/salty-cove-83012.git',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
