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

function AjusteCurva() {
  const [state, setState] = useState({
    pointsX: "",
    pointsY: "",
    result: "",
    isLoading: false,
  });

  const clearInput = () => {
    setState((old) => ({
      ...old,
      pointsX: "",
      pointsY: "",
      result: "",
      isLoading: false,
    }));
  };
  const textChange = useTextChange(setState);

  const handleCurveFit = async (e) => {
    e.preventDefault();
    setState((old) => ({
      ...old,
      isLoading: true,
      error: "",
    }));
    if (state.isLoading) {
      return;
    }
    const { pointsX, pointsY } = state;
    try {
      const response = await api.post("curveFit", {
        pointsX: pointsX,
        pointsY: pointsY,
      });
      setState((old) => ({
        ...old,
        result: response.data.result,
        isLoading: false,
      }));
    } catch (err) {
      setState((old) => ({
        ...old,
        error: "Não foi possível calcular",
        isLoading: false,
      }));
    }
  };

  return (
    <Page id='ajusteCurva'>
      <Container>
        <div className='left'>
          <h3>Ajuste de curva</h3>
          <C.Form onSubmit={handleCurveFit} method='POST'>
            <Input
              name='pointsX'
              value={state.pointsX}
              onChange={textChange("pointsX")}
              placeholder='Pontos X: 1,2,3,4'
            />
            <Input
              name='pointsY'
              value={state.pointsY}
              onChange={textChange("pointsY")}
              placeholder='Pontos Y: 1,2,3,4'
            />
            <Button
              type='submit'
              label='Calcular'
              className={state.pointsX && state.pointsY ? "" : "disabled"}
              disabled={!state.pointsX || !state.pointsY}
            />
          </C.Form>
          <Button label='Limpar campos' 
                  onClick={clearInput}
                  className={state.pointsX || state.pointsY ? "" : "disabled"}
          />
          {state.error !== "" && !state.isLoading && (
            <C.Result>
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
              Os pares ordenados devem ser escritos em dois campos separados. 
            </C.ListItem>
            <C.ListItem>
              Os valores devem ser inseridos assim: <span>1,2,3,4</span>
            </C.ListItem>
            <C.ListItem>
              A quantidade de valores X e Y devem ser iguais, para que seja possível
              montar os pares ordenados.
            </C.ListItem>
            <h4>Operadores:</h4>
            <C.ListItem><span>" , "</span> : Usado para separar o valores</C.ListItem>
          </C.List>
        </div>
      </Container>
    </Page>
  );
}

export default AjusteCurva;
