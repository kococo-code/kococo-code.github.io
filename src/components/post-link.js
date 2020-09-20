import React from "react"
import { Link } from "gatsby"

export default function PostLink({ post }){
    return(
        <article className="card">
            <Link to={post.frontmatter.slug}>
            <strong className="title">{post.frontmatter.title}</strong>
            <div className="date">{post.frontmatter.date}</div>
            </Link>
        </article>
    )
}

