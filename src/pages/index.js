// import * as React from "react"
import { Link } from "gatsby";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Navigation from "../components/Navigation/Navigation";
import Nav2 from "../components/Navigation/Nav2";
import Image from "gatsby-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import React, { Component } from "react";
import PropTypes from "prop-types";
import Gallery from "../components/gallery";
import BgCarousel from "../components/bgCarousel";
import ArticlePreview from "../components/ArticlePreview";
import PageInfo from "../components/PageInfo";
import styled from "styled-components";
import ArticlesPage from "../pages/articles";
import slugify from "slugify";
import ContactForm from "../components/contact";
// import BgGallery from "../components/bgGallery";

const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  overflow: auto;
  white-space: nowrap;
  width: 100%;
`;

const pageData = {
  title: "articles",
  paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`,
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

const IndexPage = ({ data }) => {
  const {
    allDatoCmsArticle: { nodes },
  } = data;
  return (
    <Layout>
      <div className="contentWrapper">
        <h1>Firma </h1>
        <h2>
          Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,<br></br>{" "}
          consectetur adipiscing elit. Ut auctor
        </h2>
        <div>
          <BgCarousel />
        </div>
        <ContactForm />
      </div>
      <section className="offer">
        <div className="office1">
          <div className="box">
            <div>
              <span>Biuro</span>
            </div>
            <div>
              <span>od 1000zł/msc</span>
            </div>
          </div>
          <button className="buttonOffer">→</button>
        </div>
        <div className="office1">
          <div className="box">
            <div>
              <span>Lorem ipsum</span>
            </div>
            <div>
              <span>od 500zł/msc</span>
            </div>
          </div>
          <button>→</button>
        </div>
        <div className="office2">
          <div className="box">
            <div>
              <span>Biuro lorem</span>
            </div>
            <div>
              <span>od 100zł/msc</span>
            </div>
          </div>
          <button>→</button>
        </div>
        <div className="office2">
          <div className="box">
            <div>
              <span>Biuro lorem ipsum lorem</span>
            </div>
            <div>
              <span>od 100zł/msc</span>
            </div>
          </div>
          <button>→</button>
        </div>
      </section>
      <section className="features">
        <div className="wrapper">
          <ul>
            <li>
              <span>
                Lorem ipsum dolor sit amet, conse
                <div className="belt2"></div>
              </span>
            </li>
            <li>
              <div></div>
              <span>Lorem ipsum</span>
            </li>
            <li>
              <div></div>
              <span>Lorem ipsum dolor sit amet, conse</span>
            </li>
            <li>
              <div></div>
              <span>Lorem ipsum dolor sit amet</span>
            </li>
            <li>
              <div></div>
              <span>Lorem ipsum dolor sit amet</span>
            </li>
            <li>
              <div></div>
              <span>Lorem ipsum dolor sit amet, conse lorem ipsum lorem</span>
            </li>
            <li>
              <div></div>
              <span>Lorem ipsum dolor sit amet, conse lorem ipsum lorem</span>
            </li>
            <li>
              <div></div>
              <span>Lorem ipsum dolor sit amet, conse lorem ipsum</span>
            </li>
          </ul>
          <button>
            <span>Dowiedz się więcej</span> <span>→</span>
          </button>
        </div>
      </section>
      <section className="ownOffice">
        <div className="wrapper">
          {/* <img src={require("../images/OwnOffice/image.webp").default} alt="" /> */}
          <h1>
            Lorem ipsum <br></br> vs własne biuro
          </h1>
          <div className="ownOfficeImg1"></div>
          <div className="ownOfficeImg2"></div>
        </div>
      </section>
      <section className="news">
        {/* <h1>Aktualności</h1> */}
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
      </section>
      <section className="gallery">
        <div className="wrapper">
          <h1>Galeria</h1>
          <div class="belt"></div>
        </div>
        <div className="container">
          <div>
            <Gallery />
          </div>
        </div>
      </section>
      <section className="footer">
        <div className="boxFooter"></div>
        <ul>
          <li>
            <span className="logo">
              <Link to="/">LOGO</Link>
            </span>
          </li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
        </ul>
      </section>
    </Layout>
  );
};

// export const query = graphql`
//   query Myquery {
//     file(name: { regex: "/bg1/" }) {
//       childImageSharp {
//         fluid(maxWidth: 1920, quality: 90) {
//           ...GatsbyImageSharpFluid_withWebp_noBase64
//           ...GatsbyImageSharpFluid_tracedSVG
//         }
//       }
//     }
//   }
// `

export default IndexPage;
