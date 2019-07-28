import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Basis33';
    src: url("static/fonts/basis33.ttf") format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'ExePixelPerfect';
    src: url("../static/fonts/EXEPixelPerfect.ttf") format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'UASquare';
    src: url("../static/fonts/UASQUARE.ttf") format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'WestEngland';
    src: url("../static/west_england.ttf") format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  a, a:visited {
    text-decoration: none;
    color: inherit;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 2rem;
    height: 100vh;
    background: linear-gradient(180deg, #0D0221 0%, #241734 100%);
  }
`;
export default GlobalStyles;
