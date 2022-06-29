import * as React from "react";
import Navigation from "../components/Navigation/Navigation";
import Nav2 from "../components/Navigation/Nav2";
import GlobalStyle from "../styles/globalStyles";

import Layout from "../components/layout";
import Seo from "../components/seo";

const MainLayout = ({ children }) => (
  <>
    <Seo title="Home" />
    <GlobalStyle />
    <Navigation />
    <Nav2 />
    {children}
  </>
);

export default MainLayout;
