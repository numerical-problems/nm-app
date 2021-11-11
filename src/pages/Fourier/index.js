import { useState } from "react";
import ReactLoading from "react-loading";
import { Container } from "../../layout/container";
import { Result, Loading } from "../../layout/result";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Page from "../../layout/page";
import { Form } from "./styles";
import { useTextChange } from "../../hooks/useTextChange";
import api from "../../services/api";

export default function Fourier() {
  const [state, setState] = useState({
    expression: "",
    interval1: "",
    interval2: "",
    result: "",
    error: "",
    n: "",
    isLoading: false,
  });
  const textChange = useTextChange(setState);

  const handleCalculeFourier = async (e) => {
    e.preventDefault();
    setState((old) => ({ ...old, isLoading: true }));

    if (state.isLoading) {
      return;
    }

    try {
      const response = await api.post("/fourier", {
        first_interval: Number(state.interval1),
        second_interval: Number(state.interval2),
        expression: state.expression,
        n: Number(state.n),
      });
      setState((old) => ({
        ...old,
        result: response.data.result,
        isLoading: false,
        error: "",
      }));
    } catch (err) {
      setState((old) => ({
        ...old,
        error: "Verifique se os campos foram preenchido corretamente",
        isLoading: false,
        result: "",
      }));
    }
  };

  const clearInput = () => {
    setState((old) => ({
      ...old,
      expression: "",
      interval1: "",
      interval2: "",
      result: "",
      n: "",
      error: "",
    }));
  };

  return (
    <Page id="fourier">
      <Container>
        <div className="left">
          <h3>Fourier</h3>
          <Form onSubmit={handleCalculeFourier}>
            <Input
              name="expression"
              value={state.expression}
              onChange={textChange("expression")}
              placeholder="Expressão Ex: x + 1"
            />
            <Input
              name="interval_1"
              value={state.interval1}
              onChange={textChange("interval1")}
              placeholder="Intervalo 1"
            />
            <Input
              name="interval_2"
              value={state.interval2}
              onChange={textChange("interval2")}
              placeholder="Intervalo 2"
            />
            <Input
              name="n"
              value={state.n}
              onChange={textChange("n")}
              placeholder="N Ex: 3"
            />
            <Button type="submit" 
                    label="Calcular" 
                    className={state.expression && state.interval1 && state.interval2 && state.n ? "" : "disabled"}
                    disabled={!state.expression || !state.interval1 || !state.interval2 || !state.n }/>
          </Form>
          <Button label="Limpar campos" 
                  onClick={clearInput}
                  className={state.expression || state.interval1 || state.interval2 || state.n ? "" : "disabled"}
          />
          {state.error !== "" && (
            <Result>
              <h3>Ocorreu um erro</h3>
              <p>{state.error}</p>
            </Result>
          )}
          {state.isLoading && (
            <Loading>
              <ReactLoading type="spin" color="black" />
            </Loading>
          )}
          {state.result && !state.isLoading && (
            <>
              <h2>Resultado</h2>
              <Result>{state.result}</Result>
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
