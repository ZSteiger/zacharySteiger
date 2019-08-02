import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 40px;
  height: 170px;
  .homeText {
    padding: 0 0 0 62px;
    margin-top: -20px;
  }
  .projectsText {
    padding: 25px 0 40px 0;
    margin: -45px 0 0 -17px;
  }
  .aboutText {
    margin: -50px 0 0 0;
    padding: 40px 0 30px 24px;
  }
  .contactText {
    margin: -45px 0 0 0;
    padding: 28px 10px 35px 0;
  }
  a p {
    font-family: EXEPixelPerfect;
    text-decoration-line: underline;
    font-size: 5rem;
    color: #2de2e6;
    text-shadow: 0px 0px 16px rgba(79, 234, 255, 0.5);
  }
`;

const ZS = styled.p`
  font-family: west_england;
  padding-bottom: 25px;
  cursor: default;
  font-size: 120px;
  line-height: 7rem;
  /* test */
  color: #f9c80e;
  text-shadow: 0px 0px 16px #f9c80e;
`;

export { StyledNav, ZS };
