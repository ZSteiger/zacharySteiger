import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Basis33';
    src: url("/static/fonts/basis33.ttf") format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'ExePixelPerfect';
    src: url("/static/fonts/EXEPixelPerfect.ttf") format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'UASquare';
    src: url("/static/fonts/uasquare.ttf") format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'WestEngland';
    src: url("/static/fonts/west_england.ttf") format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  a, a:visited {
    text-decoration: none;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 2rem;
    background: linear-gradient(180deg, #0d0221 0%, #241734 100%);
  }
`;
export default GlobalStyles;
