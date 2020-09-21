import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"


export default function ProjectPost({ data }) {
    const projectPost = data.markdownRemark
    return (
        <div>
            <SEO title={projectPost.frontmatter.title} description={projectPost.excerpt} />
            <h1>{projectPost.frontmatter.title}</h1>
            <h3>{projectPost.frontmatter.date}</h3>
            <div dangerouslySetInnerHTML={{ __html: projectPost.html }} />
        </div>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        frontmatter {
            title
            date
        }
        }
    }
`