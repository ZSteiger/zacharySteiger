import styled from 'styled-components';
import Router from 'next/router';
import Link from 'next/link';
import NProgress from 'nprogress';
import Nav from './Nav';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const StyledHeader = styled.div`
  background: pink;
`;

const Header = () => (
  <StyledHeader>
    <Nav />
  </StyledHeader>
);

export default Header;
