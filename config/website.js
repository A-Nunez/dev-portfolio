const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Armando N. || Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Armando Nunez Portfolio', // Alternative Site title for SEO
  siteTitleShort: 'Armando', // short_name for manifest
  siteHeadline: 'A-Nunez || Web Developer', // Headline for schema.org JSONLD
  siteUrl: 'https://armando-portfolio.netlify.com/', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Personal Portfolio of Armando Nunez, Local San Diego Web Developer',
  author: 'A-Nunez', // Author for schema.org JSONLD

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
