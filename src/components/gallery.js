import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Lightbox from "./lightbox"

const Gallery = () => (
  <StaticQuery
    query={graphql`
      query {
        galleryImages: allFile(
          filter: { relativeDirectory: { eq: "Gallery" } }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Lightbox galleryImages={data.galleryImages.edges} />}
  />
)

export default Gallery
