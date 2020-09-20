
import React from "react"
import { graphql } from "gatsby"
import Header from '../components/header';
import './markdownStyle.scss';

export default function Template({
  data, 
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <React.Fragment>
      <Header></Header>
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <span>{frontmatter.date}</span>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
    </React.Fragment>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "YYYY MMMM, DD")
        slug
        title
        subtitle
        tags
      }
    }
  }
`