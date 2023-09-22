'use client'

import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    background-color: #dad6ca;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
 
export default GlobalStyle;