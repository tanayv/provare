// next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
})

module.exports = withMDX({
  reactStrictMode: true,
})
