import styled from "styled-components";



export const Title = styled.h1`
  padding: 10px 20px;
`;

export const Form = styled.form``;

export const List = styled.ul`
  box-shadow: 0 0 10px lightgray;
  background-color: whitesmoke;
  justify-content: center;
  padding: 50px 20px;
`;

export const ListItem = styled.li`
  padding-top: 15px;
  padding-bottom: 15px;
  font-weight: 300;
  border-bottom: 1px solid #000000;
  span {
    font-weight: bold;
  }
`;

export const Result = styled.p`
  font-size: 30px;
  padding-top: 20px;
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 55px;
`;
