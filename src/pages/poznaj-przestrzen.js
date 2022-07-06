import * as React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Seo from "../components/seo";

const LayoutWrapper = styled.div`
  height: 75vh;
  padding: 160px 50px 0;
  background-color: orange;

  margin-top: -80px;
  z-index: -1;
  margin-bottom: -80px;
`;

const PoznajPrzestrzenPage = () => (
  <Layout>
    <LayoutWrapper>
      <Seo title="{Poznaj przestrzen}" />
      <h2>Twoja przestrzeń</h2>
    </LayoutWrapper>
  </Layout>
);

export default PoznajPrzestrzenPage;
