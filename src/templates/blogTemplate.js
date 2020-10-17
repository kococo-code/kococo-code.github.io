
import React from "react"
import { graphql } from "gatsby"
import Header from 'components/header';
import TagsParser  from 'utils/tagsParser';
import './markdownStyle.scss';

export default function Template({
  data, 
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <React.Fragment>
      <Header></Header>
    <section className="blog-post-container">
      <div className="blog-post-top"></div>
      <article className="blog-post">
        <div className="post-title">
          <h1>{frontmatter.title}</h1>
          <span>{frontmatter.date}</span>
          <TagsParser tags={frontmatter.tags}></TagsParser>
        </div>
       
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </section>
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
        tags
        thumbs
      }
    }
  }
`