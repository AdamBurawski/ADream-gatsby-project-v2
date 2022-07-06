import React from "react";
import Image from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";

export const query = graphql`
  query querySingleArticle($id: String!) {
    datoCmsArticle(id: { eq: $id }) {
      title
      featuredImage {
        fixed(width: 500) {
          ...GatsbyDatoCmsFixed_tracedSVG
        }
      }
      author
      articleContent {
        ... on DatoCmsHeading {
          id
          headingContent
        }
        ... on DatoCmsParagraph {
          id
          paragraphContent
        }
        ... on DatoCmsArticleImage {
          imageData {
            fixed(width: 500) {
              ...GatsbyDatoCmsFixed_tracedSVG
            }
          }
          id
        }
      }
    }
  }
`;

const ArticleContent = styled.div`
  background-color: lightgray;
  position: relative;
  padding: 160px 50px;
  top: -80px;
  margin-bottom: -80px;
`;

const PostLayout = ({ data }) => {
  return (
    <Layout>
      <ArticleContent className="articleContent">
        <h1>{data.datoCmsArticle.title}</h1>
        <p>{data.datoCmsArticle.author}</p>
        <Image fixed={data.datoCmsArticle.featuredImage.fixed} />
        <div>
          {data.datoCmsArticle.articleContent.map((item) => {
            const itemKey = Object.keys(item)[1];

            switch (itemKey) {
              case "paragraphContent":
                return <p key={item.id}>{item[itemKey]}</p>;
              case "headingContent":
                return <h2 key={item.id}>{item[itemKey]}</h2>;
              case "imageData":
                return <Image key={item.id} fixed={item[itemKey].fixed} />;
              default:
                return null;
            }
          })}
        </div>
      </ArticleContent>
    </Layout>
  );
};

export default PostLayout;
