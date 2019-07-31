import React, { Component } from 'react';
import styled from 'styled-components';
import { HomeContainer } from './styles/HomeStyles.js';

export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <p className="first">Welcome, please take some time to look around!</p>
        <p className="second">My name is Zack, and I'm a web developer.</p>
        <p className="third">This is a space devoted to my projects.</p>
      </HomeContainer>
    );
  }
}
