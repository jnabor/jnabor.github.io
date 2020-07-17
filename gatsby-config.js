
require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: process.env.GATSBY_TITLE,
    description: process.env.GATSBY_DESCRIPTION,
    author: process.env.GATSBY_AUTHOR,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `bearer ${process.env.GATSBY_GITHUB_TOKEN}`,
        },
        fetchOptions: {},
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: process.env.GATSBY_THEME_COLOR,
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_ID,
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './static/favicon/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: process.env.GATSBY_TITLE,
        short_name: 'starter',
        start_url: '/',
        background_color: process.env.GATSBY_BACKGROUND_COLOR,
        theme_color: process.env.GATSBY_THEME_COLOR,
        display: 'minimal-ui',
        icon: './static/favicon/favicon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
};
