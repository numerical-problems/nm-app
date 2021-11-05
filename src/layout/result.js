import styled from "styled-components";

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
