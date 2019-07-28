import Link from 'next/link';
import { StyledNav } from './styles/NavStyles';

const Nav = () => (
  <StyledNav role="navigation">
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/projects">
      <a>Projects</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/contact">
      <a>Contact</a>
    </Link>
  </StyledNav>
);

export default Nav;
