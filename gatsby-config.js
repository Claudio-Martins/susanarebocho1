require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.js
    siteTitle: `SusanaRebocho1`,
    siteTitleAlt: `SR1 - Site portfolio`,
    siteHeadline: `SR1 - Site portfolio de @camaf.eu`,
    siteUrl: `https://susanarebocho1.gatsbyjs.io`,
    siteDescription: `Colorido, animado, pagina-unica, portfolio com Parallax e animacoes`,
    siteLanguage: `pt`,
    siteImage: `/banner.jpg`,
    author: `@camaf.eu`,
  }
