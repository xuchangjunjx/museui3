const pages = require('./utils')

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
  pages
}
