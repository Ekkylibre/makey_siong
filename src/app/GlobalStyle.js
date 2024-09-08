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
  }

  body {
    font-family: 'Cormorant Garamond', serif;
  }

  // Ajoute d'autres styles globaux ici si nécessaire
`;

export default GlobalStyle;
