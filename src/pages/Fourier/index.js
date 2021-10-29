import { useState } from 'react'
import { Container } from "../../layout/container";
import Input from '../../components/Input'
import Page from "../../layout/page";

function Home() {
  const [state, setState] = useState({
    expression: ''
  })

  const textChange = (field) => (e) => {
    setState((old) => ({
      ...old,
      [field]: e.target.value
    }))
  }

  return (
    <Page id="fourier">
      <Container>
        <div className="left">
          <h3>Fourier</h3>
          <form>
            <Input name="expression" value={state.expression} onChange={textChange('expression')} placeholder="Expressão Ex: x + 1" />
          </form>
        </div>
        <div className="right">
          <h4>right</h4>
        </div>
      </Container>
    </Page>
  );
}

export default Home;
