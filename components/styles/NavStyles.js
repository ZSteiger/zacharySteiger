import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 150px;
  a p {
    font-family: EXEPixelPerfect;
    text-align: center;
    text-decoration-line: underline;
    color: #2de2e6;
    text-shadow: 0px 0px 16px rgba(79, 234, 255, 0.5);
  }
`;

const ZS = styled.p`
  font-family: West_england;
  font-size: 100px;
  line-height: 6rem;
  /* test */
  color: #f9c80e;
  text-shadow: 0px 0px 16px #f9c80e;
`;

export { StyledNav, ZS };
