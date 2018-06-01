import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import './style.scss'

class TemplateWrapper extends React.Component {
  render () {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteKeywords = get(this, 'props.data.site.siteMetadata.keywords')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    const { children } = this.props

    return (
      <div className='template-wrapper'>
        <Helmet
          title={siteTitle}
          meta={[
            { name: 'description', content: siteDescription },
            { name: 'keywords', content: siteKeywords }
          ]}
        />
        <div className='template-wrapper-children'>
          {children()}
        </div>
      </div>
    )
  }
}

export default TemplateWrapper

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`
