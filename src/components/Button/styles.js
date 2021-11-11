import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  button {
    background-color: #f3d1c2;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    width: 250px;
    border-radius: 8px;
    border: none;
    font-size: 20px;
    font-family: "Poppins";
  }

  button:hover {
    background-color: #d37f7f;
    color: #fff;
  }

  .disabled {
    background-color: lightgrey;
    color: #fff;
  }
  .disabled:hover {
    background-color: lightgrey;
    color: #fff;
  }
`;
