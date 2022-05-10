import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: #000000;
    --gray-1: #BCB4B4;
    --deep-dark: #262626;
    --steel-1: #5b84bc;
    --gray-2: #363636;
    --white : white;
    --black: black;
    --gold-1: #EDA800;
    --gold-2: #A57C00
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--dark-bg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
`;
export default GlobalStyles;