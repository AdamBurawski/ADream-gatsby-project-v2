import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import ArticlePreview from "../components/ArticlePreview";
import PageInfo from "../components/PageInfo";

const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`;

const pageData = {
  title: "articles",
  paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`,
};

const ArticlesPage = ({ data }) => (
  <>
    <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
    <ArticlesWrapper>
      {data.allMdx.nodes.map(
        ({ excerpt, frontmatter: { title, slug, author, featuredImage } }) => (
          <ArticlePreview
            key={slug}
            title={title}
            excerpt={excerpt}
            image={featuredImage.childImageSharp.fluid}
            slug={slug}
          />
        )
      )}
    </ArticlesWrapper>
  </>
);

export const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          title
          slug
          author
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 700, maxHeight: 500) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`;

export default ArticlesPage;
