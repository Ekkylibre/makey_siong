"use client";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    scroll-behavior: smooth;
    background-color: #081319;
  }

  body {
    /* font-family: Arial, sans-serif; */
  }

  // Ajoute d'autres styles globaux ici si nécessaire
`;

export default GlobalStyle;
