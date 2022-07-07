import * as React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Seo from "../components/seo";

const LayoutWrapper = styled.div`
  height: 75vh;
  padding: 160px 50px 0;
  background-color: yellowgreen;
  margin-top: -80px;
  z-index: -1;
  margin-bottom: -80px;
`;

const KontaktPage = () => (
  <Layout>
    <LayoutWrapper>
      <Seo title="Kontakt" />
      <h2>Kontakt</h2>
      <h2>telefon</h2>
    </LayoutWrapper>
  </Layout>
);

export default KontaktPage;
