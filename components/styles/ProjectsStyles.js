import styled from 'styled-components';

const ProjectsContainer = styled.div`
  margin: 25px;
  h1 {
    font-family: basis33;
    font-weight: 300;
    font-size: 6rem;
    text-align: center;
    color: #f9c80e;
    text-shadow: 0px 0px 16px #f9c80e;
  }
  a {
    font-family: basis33;
    font-size: 3rem;
    color: #f9c80e;
    text-shadow: 0px 0px 16px #f9c80e;
    text-align: center;
  }
  p {
    font-family: UASquare;
    font-size: 3rem;
    color: #920075;

    text-shadow: 0px 0px 16px #920075;
  }
`;

const ProjectCell = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr;
  padding: 25px;
  margin: 0 0 20px 0;
  background: #0d0221;
  border: 8px solid rgba(46, 33, 87, 0.52);
  box-shadow: inset 0 4px 14px #540d6e;
  .imagePane {
    & > * {
      max-width: 500px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
    }
  }
`;

export { ProjectsContainer, ProjectCell };
