import React, { Component } from 'react';
import styled from 'styled-components';
import Bridge from '../static/bridge.svg';

const HomeContainer = styled.div``;

export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <p>Welcome, please take some time to look around!</p>
        <p>My name is Zack, and I'm a web developer.</p>
        <p>This is a space devoted to my projects.</p>
      </HomeContainer>
    );
  }
}
