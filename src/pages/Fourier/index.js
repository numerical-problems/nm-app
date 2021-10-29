import { useState } from 'react'
import { Container } from "../../layout/container";
import Input from '../../components/Input'
import Button from '../../components/Button'
import Page from "../../layout/page";
import { Form } from './styles'

function Home() {
  const [state, setState] = useState({
    expression: '',
    result: '',
    error: '',
    isLoading: false,
  })

  const textChange = (field) => (e) => {
    setState((old) => ({
      ...old,
      [field]: e.target.value
    }))
  }

  const handleCalculeFourier = async (e) => {
    e.preventDefault()
    setState((old) => ({ ...old, isLoading: true }))

    if (state.isLoading) {
      return
    }
    try  {
      // axios resquest;
      setState((old) => ({
        ...old,
        result: 'x + 1',
        isLoading: false,
      }))
    } catch (err) {
      setState((old) => ({
        ...old,
        error: 'Expressão Inválida',
        isLoading: false
      }))
    }
  }

  return (
    <Page id="fourier">
      <Container>
        <div className="left">
          <h3>Fourier</h3>
          <Form onSubmit={handleCalculeFourier}>
            <Input name="expression" value={state.expression} onChange={textChange('expression')} placeholder="Expressão Ex: x + 1" />
            <Button type="submit" label="Calcular" />
          </Form>
          {state.result && (
            <>
              <h3>Resultado</h3>
              <p>{state.result}</p>
            </>
          )}
          
        </div>
        <div className="right">
          <h4>right</h4>
        </div>
      </Container>
    </Page>
  );
}

export default Home;
