import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family:  'Roboto', sans-serif;
    color: #292929;
  }
 
  html, body, #root{
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased ;
  }

  a {
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }


`