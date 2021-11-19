import React, { useState } from "react";
import { Container } from "../../layout/container";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Page from "../../layout/page";
import * as C from "./styles";
import { useTextChange } from "../../hooks/useTextChange";
import ReactLoading from "react-loading";
import api from "../../services/api";

function Interpolacao() {
  const [state, setState] = useState({
    expression: "",
    result: "",
    error: "",
    isLoading: false,
  });

  const clearInput = () => {
    setState((old) => ({
      ...old,
      expression: "",
      result: "",
      error: "",
    }));
  };

  const textChange = useTextChange(setState);

  const handleInterpolation = async (e) => {
    e.preventDefault();
    setState((old) => ({
      ...old,
      isLoading: true,
      error: "",
    }));
    if(state.isLoading){
      return;
    }
    const { expression } = state;
    try {
      const response = await api.post("interpolation", {
        coordinates: expression
      });
      setState((old) => ({
        ...old,
        result: response.data.result,
        isLoading: false
      }));
    } catch (err){
      setState((old) => ({
        ...old,
        error: "Ocorreram erros",
        isLoading: false
      }));
    }
  };
  

  return (
    <Page id='interpolacao'>
      <Container>
        <div className='left'>
          <h3>Interpolação Polinomial</h3>
          <C.Form onSubmit={handleInterpolation} method='POST'>
            <Input
              name='expression'
              value={state.expression}
              onChange={textChange("expression")}
              placeholder='Expressão: 1,2 ; 2,4 ; 1.7 , 6.4'
            />
            <Button type='submit' 
                    label='Calcular'
                    className={state.expression ? "" : "disabled"}
                    disabled={!state.expression}
            />
          </C.Form>
          <Button label='Limpar campos' 
                  onClick={clearInput}
                  className={state.expression ? "" : "disabled"}
          />
          {state.error !== "" && (
            <C.Result>
              <h3>Ocorreu um erro</h3>
              <p>{state.error}</p>
            </C.Result>
          )}
          {state.isLoading && (
            <C.Loading>
              <ReactLoading type='spin' color='black' />
            </C.Loading>
          )}
          {state.result && !state.isLoading && (
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
              As coordenadas dos pontos devem ser escritos desta maneira: 
              <span>1,2 ; 3,4 ; 5,6</span>
            </C.ListItem>
            <C.ListItem>
              A calculadora também aceita valores flutuantes, basta usar <span>" . "</span>
            </C.ListItem>
            <C.ListItem>O espaçamento não interfere no cálculo</C.ListItem>
            <h4>caracteres:</h4>
            <C.ListItem><span>" . "</span> : Usado em valor flutuante</C.ListItem>
            <C.ListItem><span>" , "</span> : Usado para separar o valor x,y</C.ListItem>
            <C.ListItem><span>" ; "</span> : Usado para separar as coordenadas</C.ListItem>
          </C.List>
        </div>
      </Container>
    </Page>
  );
}

export default Interpolacao;
