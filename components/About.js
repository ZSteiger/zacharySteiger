import React, { Component } from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  border: 8px solid rgba(46, 33, 87, 0.52);
  box-shadow: inset 6px 4px 12px #540d6e;
  margin: 20px 50px;
  padding: 50px;
  p {
    font-size: 2.5rem;
    line-height: 1.5;
    color: #920075;
    text-shadow: 0px 0px 15px #920075;
  }
  img {
    max-width: 250px;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    text-align: center;
    img {
      margin: 0 auto;
    }
  }
`;
class About extends Component {
  render() {
    return (
      <AboutContainer>
        <p>
          Hey there, thanks for stumbling on my corner of the web. My name is
          Zack Steiger, and I'm based out of Louisville, KY. I've been
          developing on my own for three years now,
          <br />
          <br />
          When I'm not honing these skills, you can find me building playlists,
          filling sketchbooks, and running around the neighborhood with my dog.
          <br /> <br />
          Hope to connect with you soon!
        </p>
        <img src="../static/face.png" alt="My Face" />
      </AboutContainer>
    );
  }
}

export default About;
