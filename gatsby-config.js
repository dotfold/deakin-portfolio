module.exports = {
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/content`,
        name: 'markdown-pages'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              wrapperStyle: `padding:8px;box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);`
            }
          },
          {
            resolve: 'gatsby-remark-embed-youtube',
            options: {
              width: 590,
              height: 332
            }
          }
        ]
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`open sans\:300,600`]
      }
    }
  ],
  siteMetadata: {
    title: 'James McNamee - Portfolio',
    description: 'Deakin SIT302 Project Delivery Portfolio',
    keywords: ''
  },
  pathPrefix: '/deakin-portfolio'
}
