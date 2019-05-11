const path = require( 'path' )

module.exports = {
  siteMetadata: {
    title: 'Nick Lemmon, Front End Web Developer',
    author: 'Nick Lemmon',
    description: 'Blog for Nick Lemmon, front end web developer in Durham, NC.',
    siteUrl: 'https://gatsbyjs.github.io/gatsby-starter-blog/',
  },
  pathPrefix: '/gatsby-starter-blog',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
              alias: {
                '@components': path.resolve( __dirname, 'src/components' )
              },
              extensions: []
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './static/favicon.png'
      }
    }
  ]
}
