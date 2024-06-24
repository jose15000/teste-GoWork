// src/themes/globalStyles.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }

  .navbar {
    background-color: ${({ theme }) => theme.background};
  }

  .items a, .items button {
    color: ${({ theme }) => theme.text};
  }

  .items button {
    background-color: ${({ theme }) => theme.toggleBorder};
    border: none;
    padding: 10px;
    cursor: pointer;
  }
`;
