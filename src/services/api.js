import axios from "axios";

const baseURL = "http://localhost:5000";
export default axios.create({
  baseURL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
  },
});

export const getError = (error) => {
  if (error.response) {
    if (error.response.status === 403) {
      throw new Error("Você não possui autorização");
    }
    throw new Error("Erro inesperado");
  }
  throw new Error("Não foi possível se comunicar com o servidor");
};
