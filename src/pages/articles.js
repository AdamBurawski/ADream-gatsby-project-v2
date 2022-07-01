import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import ArticlePreview from "../components/ArticlePreview";
import PageInfo from "../components/PageInfo";
import slugify from "slugify";
import Layout from "../components/layout";

const LayoutWrapper = styled.div`
  // height: 50vh;
`;

const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  margin-bottom: 100px;
  padding: 80px 50px 0;
`;

const pageData = {
  title: "articles",
  paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`,
};

const ArticlesPage = ({ data }) => {
  const {
    allDatoCmsArticle: { nodes },
  } = data;
  return (
    <>
      <LayoutWrapper className="newsPage">
        <Layout>
          <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
          <ArticlesWrapper>
            {nodes.map(({ title, featuredImage }) => (
              <ArticlePreview
                key={title}
                title={title}
                image={featuredImage.fluid}
                slug={slugify(title, { lower: true })}
              />
            ))}
          </ArticlesWrapper>
        </Layout>
      </LayoutWrapper>
    </>
  );
};

export const query = graphql`
  {
    allDatoCmsArticle {
      nodes {
        title
        featuredImage {
          fluid(maxWidth: 500) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`;

export default ArticlesPage;
