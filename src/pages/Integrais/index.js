import React, { useState } from "react";
import { Container } from "../../layout/container";
import { Result, Loading } from "../../layout/result";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Page from "../../layout/page";
import * as C from "./styles";
import { useTextChange } from "../../hooks/useTextChange";
import ReactLoading from "react-loading";
import api from "../../services/api";

function Integrais() {
  const [state, setState] = useState({
    loading: false,
    expression: "",
    related_to: "",
    limit_superior: "",
    limit_inferior: "",
    error: "",
  });

  const textChange = useTextChange(setState);

  const handleIntegration = async (e) => {
    e.preventDefault();

    const { expression, related_to, limit_superior, limit_inferior } = state;

    setState((old) => ({
      ...old,
      isLoading: true,
      error: "",
    }));
    if (state.isLoading) {
      return;
    }

    try {
      if (state.limit_inferior === "" && state.limit_superior === "") {
        const response = await api.post("/integrals", {
          expression,
          related_to,
        });
        setState((old) => ({
          ...old,
          isLoading: false,
          result: response.data.result,
        }));
      } else {
        const response = await api.post("/integrals/limits", {
          expression,
          related_to,
          limit_superior,
          limit_inferior,
        });

        setState((old) => ({
          ...old,
          isLoading: false,
          result: response.data.result,
        }));
      }
    } catch (err) {
      console.log(err);
      setState((old) => ({
        ...old,
        error: "Ocorreram erros",
        isLoading: false,
      }));
    }
  };

  const clearInput = () => {
    setState((old) => ({
      ...old,
      expression: "",
      related_to: "",
      limit_superior: "",
      limit_inferior: "",
    }));
  };

  return (
    <Page id='integrais'>
      <Container>
        <div className='left'>
          <h3>Derivadas</h3>
          <C.Form onSubmit={handleIntegration} method='POST'>
            <Input
              name='expression'
              value={state.expression}
              onChange={textChange("expression")}
              placeholder='Expressão: sin(x)*tan(x)'
            />
            <Input
              name='related_to'
              value={state.related_to}
              onChange={textChange("related_to")}
              placeholder='Variável relacionada: x,y,z'
            />
            <Input
              name='limit_superior'
              value={state.limit_superior}
              onChange={textChange("limit_superior")}
              placeholder='Limite superior (opcional)'
            />
            <Input
              name='limit_inferior'
              value={state.limit_inferior}
              onChange={textChange("limit_inferior")}
              placeholder='Limite inferior(opcional)'
            />
            <Button
              type='submit'
              label='Calcular'
              className={state.expression && state.related_to ? "" : "disabled"}
              disabled={!state.expression || !state.related_to}
            />
          </C.Form>
          <Button label='Limpar campos' onClick={clearInput} />
          {state.error !== "" && !state.isLoading && (
            <C.Result>
              <h3>Ocorreu um erro</h3>
              <p>{state.error}</p>
            </C.Result>
          )}
          {state.isLoading && (
            <Loading>
              <ReactLoading type='spin' color='black' />
            </Loading>
          )}
          {state.result && !state.isLoading && state.error === "" && (
            <>
              <h2>Resultado</h2>
              <Result>{state.result}</Result>
            </>
          )}
        </div>
        <div className='right'>
          <h4 style={{ paddingLeft: 20 }}>Orientações</h4>
          <C.List>
            <C.ListItem>
              As expressões devem ser escritas desta maneira:
              <span>2*x**5-2*x**3, sin(x)*tan(x)</span>
            </C.ListItem>
            <C.ListItem>
              Para utilizar raiz quadrada, utilize <span>sqrt(expressão)</span>
            </C.ListItem>
            <C.ListItem>
              Para utilizar logaritmo natural, utilize <span>ln</span>
            </C.ListItem>
            <C.ListItem>
              Para utilizar log base 10, utilize <span>log</span>
            </C.ListItem>
            <h4>Operadores:</h4>
            <C.ListItem>*: Multiplicação</C.ListItem>
            <C.ListItem>/: Divisão</C.ListItem>
            <C.ListItem>
              **:Potência,por exemplo:<span>3**3</span> para 3 elevado ao cubo.
              No <span>retorno</span> da resposta, a potência será representada
              por:
              <span>^</span>
            </C.ListItem>
          </C.List>
        </div>
      </Container>
    </Page>
  );
}

export default Integrais;
