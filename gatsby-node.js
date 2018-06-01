var extractTextWebpackPlugin = require('extract-text-webpack-plugin')
const path = require('path')

exports.modifyWebpackConfig = function ({ config, stage }) {
  config.merge({
    postcss (wp) {
      return [
        require('postcss-cssnext')({
          browsers: ['last 2 versions', '> 2%', 'ie 9']
        })
      ]
    }
  })

  if (stage === 'build-css') {
    config.removeLoader('sass')
    config.loader('sass', {
      test: /\.(sass|scss)/,
      exclude: /\.module\.(sass|scss)$/,
      loader: extractTextWebpackPlugin.extract([
        'css?minimize',
        'postcss',
        'sass'
      ])
    })
  }

  if (stage === 'develop') {
    config.removeLoader('sass')
    config.loader('sass', {
      test: /\.(sass|scss)/,
      exclude: /\.module\.(sass|scss)$/,
      loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap']
    })
  }

  return config
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const pageTemplate = path.resolve(`src/templates/pageTemplate.js`)

  return graphql(
    `
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `
  ).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: pageTemplate,
        context: {} // additional data can be passed via context
      })
    })
  })
}
