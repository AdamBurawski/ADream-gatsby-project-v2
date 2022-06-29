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
            <div className="boxFooter"></div>
            <ul>
              <li>
                <span className="logo">
                  <Link to="/">LOGO</Link>
                </span>
              </li>
              <li>lorem ipsum1</li>
              <li>lorem ipsum2</li>
              <li>lorem ipsum3</li>
              <li>lorem ipsum4</li>
              <li>lorem ipsum5</li>
              <li>lorem ipsum6</li>
              <li>lorem ipsum7</li>
              <li>lorem ipsum8</li>
            </ul>
          </section>
          © {new Date().getFullYear()}, Product designed by Adam
          {` `}
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
