import * as React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Seo from "../components/seo";

const LayoutWrapper = styled.div`
  height: 75vh;
  padding: 160px 50px 0;
  background-color: purple;
  margin-top: -80px;
  z-index: -1;
  margin-bottom: -80px;
`;

const WlasneBiuroPage = () => (
  <Layout>
    <LayoutWrapper>
      <Seo title="Oferta" />
      <h2>Witaj w swoim biurze</h2>
    </LayoutWrapper>
  </Layout>
);

export default WlasneBiuroPage;
