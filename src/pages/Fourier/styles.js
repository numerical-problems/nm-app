import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-areas:
    "e e"
    "i1 i2"
    "n n"
    "b b"
    "c c";

  & > :nth-child(1) {
    grid-area: e;
  }

  & > :nth-child(2) {
    grid-area: i1;
    padding-right: 10px;
  }

  & > :nth-child(3) {
    grid-area: i2;
    padding-left: 10px;
  }

  & > :nth-child(4) {
    grid-area: n;
  }

  & > :nth-child(5) {
    grid-area: b;
  }

  & > :nth-child(6) {
    grid-area: c;
  }

  @media (max-width: 920px) {
    grid-template-areas:
      "e e"
      "i1 i1"
      "i2 i2"
      "n n"
      "b b";
    & > :nth-child(2) {
      grid-area: i1;
      padding-right: 0;
    }

    & > :nth-child(3) {
      grid-area: i2;
      padding-left: 0;
    }
  }
`;
