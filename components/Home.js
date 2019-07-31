import React, { Component } from 'react';
import styled from 'styled-components';
import { HomeContainer, FancyBox } from './styles/HomeStyles.js';

export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <div className="bridge" />
        <FancyBox className="first">
          Welcome, please take some time to look around!
        </FancyBox>
        <FancyBox className="second">
          My name is Zack, and I'm a web developer.
        </FancyBox>
        <FancyBox className="third">
          This is a space devoted to my projects.
        </FancyBox>
      </HomeContainer>
    );
  }
}
