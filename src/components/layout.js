/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

import Header from "./header";
import "./layout.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={
          {
            // marginTop: `400px`,
            // marginLeft: `176px`,
            // margin: `0 auto`,
            // maxWidth: 1400,
            // padding: `0 1.0875rem 1.45rem`,
          }
        }
      >
        <main>{children}</main>
        <footer
          style={
            {
              // marginTop: `20rem`,
              // marginLeft: `176px`,
              // position: `absolute`,
              // bottom: `0`,
            }
          }
        >
          <section className="footer">
            <div className="boxFooter">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <ul>
              <li>
                <span className="logo">
                  <Link to="/">LOGO</Link>
                </span>
              </li>
              <li>
                {" "}
                <span style={{ textAlign: "left", display: "inline-block" }}>
                  ul. Towarowa5/6<br></br>31-000 Kraków
                </span>
              </li>
              <li>
                <span style={{ textAlign: "left", display: "inline-block" }}>
                  <strong>+48 999 999 999</strong>
                  <br></br>
                  <strong>email@email.com</strong>
                </span>
              </li>
              <li>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Strona główna
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/poznaj-przestrzen"
                >
                  Poznaj przestrzeń
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/wlasne-biuro"
                >
                  Własne biuro
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/articles"
                >
                  Aktualności
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/oferta"
                >
                  Oferta
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/contact"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </section>
          <div className="designedBy">
            {" "}
            © {new Date().getFullYear()}, Product designed by Adam
            {` `}
          </div>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
