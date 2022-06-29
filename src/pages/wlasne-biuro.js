import * as React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Seo from "../components/seo";

const LayoutWrapper = styled.div`
  height: 60vh;
  padding: 80px 50px 0;
  background-color: purple;
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
