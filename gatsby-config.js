module.exports = {
  siteMetadata: {
    title: `Kococo Tech Blog`,
    description: `Kococo Tech Blog`,
    author: `@Jintaek Lim`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/contents`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kococo Development Blog`,
        short_name: `Devlog`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon/favicon-32x32.png`,
      },
    },
    `gatsby-plugin-sass`,
  ],
  
}

