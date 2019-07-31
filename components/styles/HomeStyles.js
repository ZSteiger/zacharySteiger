import styled from 'styled-components';

const HomeContainer = styled.div`
  margin: 20px;
  text-align: center;
  display: grid;
  grid-template-columns: 3fr 1fr 3fr;
  grid-template-areas: 'first . .' '. . second' 'third . .';
  background: url('../../static/sun.svg'), url('../../static/bridge.svg');
  background-repeat: no-repeat;
  background-position: center, bottom center;
  background-size: contain, contain;
  .first {
    grid-area: first;
  }
  .second {
    grid-area: second;
  }
  .third {
    grid-area: third;
  }
`;

const FancyBox = styled.p`
  font-family: UASquare;
  font-size: 3rem;
  color: #fd3777;
  padding: 40px;
  text-shadow: 0px 0px 16px #ff3864;
  background: rgba(36, 23, 52, 0.51);
  border: 8px solid rgba(46, 33, 87, 0.52);
  box-shadow: inset 6px 4px 12px #540d6e;
`;
export { HomeContainer, FancyBox };
