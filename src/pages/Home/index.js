import React from "react";

import { Container } from "../../layout/container";
import Page from "../../layout/page";

function Home() {
  return (
    <Page id="home">
      <Container>
        <div className="left">
          <h3>IFC - Métodos numéricos</h3>
          <p>Esse site PWA foi motivado ...</p>
        </div>
        <div className="right">
          <h4>right</h4>
        </div>
      </Container>
    </Page>
  );
}

export default Home;
