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

const IndexPage = ({ data }) => (
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

      <form
        className="form"
        name="contact-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <span>Lorem ipsum Lorem ipsum lorem ipsum</span>
        <span>consectetur adipiscing elit. Ut auctor arcu</span>
        <span>Zostaw kontakt, zadzwonimy do Ciebie</span>
        <input name="name" type="text" placeholder="Imię i nazwisko" />
        <input name="phone" type="phone" placeholder="Telefon" />
        <input name="email" type="email" placeholder="Email" />
        <textarea name="message" id="" cols="30" rows="10">
          Lorem ipsum lorem ipsum
        </textarea>
        <div className="checkBoxWrapper">
          <label>
            <input className="check" name="check" type="checkbox"></input>
            Wyrażam dobrowolną zgodę n przetwarzanie moich danych osobowych
            więcej...
          </label>
        </div>
        <button>Wyślij</button>
      </form>
      {/* <button className="btn1">←</button>
      <button className="btn2">→</button> */}
      {/* <input type="range" value="2" min="0" max="3" id="galleryInput"></input> */}
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
      <h1>Aktualności</h1>
      <div className="container">
        <div className="wrapper">
          <div>""</div>
          <span>01.01.2021</span>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          <button>Więcej</button>
        </div>
        <div className="wrapper">
          <div>""</div>
          <span>01.01.2021</span>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          <button>Więcej</button>
        </div>
        <div className="wrapper">
          <div>""</div>
          <span>01.01.2021</span>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          <button>Więcej</button>
        </div>
      </div>
    </section>
    <section className="gallery">
      <div className="wrapper">
        <h1>Galeria</h1>
        <div class="belt"></div>
      </div>
      <div className="container">
        {/* <div></div> */}
        <div>
          <Gallery />
        </div>
        {/* <div className="wrapper1">
          <div></div>
          <div></div>
        </div>
        <div></div> */}
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
