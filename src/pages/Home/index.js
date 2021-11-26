import React from "react";

import { Container } from "../../layout/container";
import Page from "../../layout/page";

function Home() {
  return (
    <Page id="home">
      <Container>
        <div className="left">
          <h3>IFC - Métodos numéricos</h3>
          <p>Esse site foi desenvolvido com o intuito de aplicar os conhecimentos teóricos adiquiridos pelos alunos da matéria de métodos numéricos utilizando-se da programação.</p>
        </div>
        <div className="right">
        </div>
      </Container>
    </Page>
  );
}

export default Home;
