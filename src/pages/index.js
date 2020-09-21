import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import "modern-normalize"

export default function Home({data}) {
  return (
    <div>
      <SEO title="Home" description={data.site.siteMetadata.description} />
      <Link to="/">
        <h1>{data.site.siteMetadata.title}</h1>
      </Link>
      <Link to="/contact">Contact</Link>
      <h4>{data.allMarkdownRemark.totalCount}Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
          <h3>
            {node.frontmatter.title} <span> - {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
    )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`