import Link from 'next/link';
import styled from 'styled-components';
import { StyledNav, ZS } from './styles/NavStyles';
import HomeButton from '../static/navButtons/homeButton.svg';
import ProjectsButton from '../static/navButtons/projectsButton.svg';
import AboutButton from '../static/navButtons/aboutButton.svg';
import ContactButton from '../static/navButtons/contactButton.svg';

const Nav = () => (
  <StyledNav role="navigation">
    <Link href="/">
      <a>
        <HomeButton />
        <p className="homeText">Home</p>
      </a>
    </Link>
    <Link href="/projects">
      <a>
        <ProjectsButton />
        <p className="projectsText">Projects</p>
      </a>
    </Link>
    <ZS>
      Z<br />S
    </ZS>
    <Link href="/about">
      <a>
        <AboutButton />
        <p className="aboutText">About</p>
      </a>
    </Link>
    <Link href="/contact">
      <a>
        <ContactButton />
        <p className="contactText">Contact</p>
      </a>
    </Link>
  </StyledNav>
);

export default Nav;
