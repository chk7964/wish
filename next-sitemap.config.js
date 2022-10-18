/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://tools.fontbasket.com',
  generateRobotsTxt: true, // (optional)
  changefreq: 'weekly',
  priority: 0.5,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  // ...other options
}