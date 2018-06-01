import React from 'react'
import Link from 'gatsby-link'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import '../pages/style.scss'

export default function Template ({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div className='index'>
      <div className='main'>
        <nav>
          <Link className='link' to='/'>← Back</Link>
        </nav>
        <article
          className='article-content'
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <nav><Link className='link' to='/'>← Back</Link></nav>
      </div>
      <div className='aside'>
        <div className='top'>
          <About />
        </div>
        <div className='bottom'>
          <Links />
        </div>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
