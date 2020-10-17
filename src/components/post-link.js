import React from "react"
import { Link } from "gatsby"
import TagsParser from 'utils/tagsParser';
export default function PostLink({ post }){
    return(
        <Link className="card" to={post.frontmatter.slug}>
            <img src={post.frontmatter.thumbs} alt="thumb"></img>
            <strong className="title">{post.frontmatter.title}</strong>
            <div className="date">{post.frontmatter.date}</div>
            <div className="card-tags">
                <TagsParser isMain={true} tags={post.frontmatter.tags}></TagsParser>
            </div>
        </Link>
    )
}


