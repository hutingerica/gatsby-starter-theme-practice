/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
      title: `Erica Huang`,
      description: `An interaction designer based in Bristol`,
    author: `Erica Huang`,
    },
  /* Your site config here */
    plugins: [
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `Erica Huang`,
          short_name: `Erica Huang`,
          start_url: `/`,
          background_color: `#6b37bf`,
          theme_color: `#6b37bf`,
          // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
          // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
          display: `standalone`,
          icon: `src/images/favicon.png`, // This path is relative to the root of the site.
        },
      },
      `gatsby-plugin-offline`,
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/`,
        },
      },
      `gatsby-transformer-remark`,
    ],
}
