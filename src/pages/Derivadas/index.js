import React, { useState } from "react";
import { Container } from "../../layout/container";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Page from "../../layout/page";
import api from "../../services/api";
import * as C from "./styles";

function Derivadas() {
  const [state, setState] = useState({
    expression: "",
    related_to: "",
    times: "",
    result: "",
    error: "",
    isLoading: false,
  });

  const textChange = (field) => (e) => {
    setState((old) => ({
      ...old,
      [field]: e.target.value,
    }));
  };

  const handleDerivation = async (e) => {
    e.preventDefault();
    setState((old) => ({ ...old, isLoading: true, error: "" }));
    const { expression, related_to } = state;
    const times = state.times ? state.times : 1;
    const url = `http://localhost:5000/derivate`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*",
      },
      body: JSON.stringify({
        expression,
        related_to,
        times,
      }),
    });
    const data = await response.json();

    if (data.message) {
      setState((old) => ({
        ...old,
        error: data.message,
        isLoading: false,
      }));
    }

    setState((old) => ({
      ...old,
      result: data.result,
      isLoading: false,
    }));
  };

  //TODO:CORRIGIR ERROS UTILIZANDO O AXIOS
  // const handleDerivation = async (e) => {
  //   e.preventDefault();
  //   setState((old) => ({ ...old, isLoading: true, error: "" }));
  //   try {
  //     const { data } = await api.post(`/derivate`, {
  //       expression: state.expression,
  //       related_to: state.related_to,
  //       times: state.times,
  //     });
  //     setState((old) => ({
  //       ...old,
  //       result: data.result,
  //       error: data.error,
  //       isLoading: false,
  //     }));
  //     if (data.message) {
  //       setState((old) => ({
  //         ...old,
  //         error: data.message,
  //         isLoading: false,
  //       }));
  //     }
  //     return data;
  //   } catch (error) {
  //     setState((old) => ({
  //       ...old,
  //       error: state.error,
  //       isLoading: false,
  //     }));
  //   }
  // };

  const clearInput = () => {
    setState((old) => ({
      ...old,
      expression: "",
      related_to: "",
      times: "",
      result: "",
      error: "",
    }));
  };

  return (
    <Page id='derivadas'>
      <Container>
        <div className='left'>
          <h3>Derivadas</h3>
          <C.Form onSubmit={handleDerivation} method='POST'>
            <Input
              name='expression'
              value={state.expression}
              onChange={textChange("expression")}
              placeholder='Expressão: 3*x**5-2*x**3+5-3*x'
            />
            <Input
              name='related_to'
              value={state.related_to}
              onChange={textChange("related_to")}
              placeholder='Variável relacionada: x,y,z'
            />
            <Input
              name='times'
              value={state.times}
              onChange={textChange("times")}
              placeholder='Quantidade de derivações sucessivas(opcional)'
            />
            <Button type='submit' label='Calcular' />
            <Button type='' label='Limpar campos' onClick={clearInput} />
          </C.Form>
          {state.error && (
            <>
              <h2>Ocorreu um erro</h2>
              <C.Result>{state.error}</C.Result>
            </>
          )}
          {state.result && (
            <>
              <h2>Resultado</h2>
              <C.Result>{state.result}</C.Result>
            </>
          )}
        </div>
        <div className='right'>
          <h4 style={{ paddingLeft: 20 }}>Orientações</h4>
          <C.List>
            <C.ListItem>
              As expressões devem ser escritas desta maneira:
              <span>2*x**5-2*x**3</span>
            </C.ListItem>
            <C.ListItem>
              Para elevar um número a uma potência, deve-se utilizar o símbolo:
              **, por exemplo: <span>3**3</span>
            </C.ListItem>
            <C.ListItem>
              Se o parâmetro de quantidade de derivações não for informado, será
              realizada 1 derivação
            </C.ListItem>
          </C.List>
        </div>
      </Container>
    </Page>
  );
}

export default Derivadas;
