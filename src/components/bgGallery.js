import React from "react";
import { StaticQuery, graphql } from "gatsby";
import BgCarousel from "./bgCarousel";

const BgGallery = () => (
  <StaticQuery
    query={graphql`
      query {
        bgGalleryImages: allFile(filter: { relativeDirectory: { eq: "Bg" } }) {
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
    render={(data) => (
      <BgCarousel bgGalleryImages={data.bgGalleryImages.edges} />
    )}
  />
);

export default BgGallery;
