import React, { Component } from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  background: rgba(36, 23, 52, 0.51);
  border: 8px solid rgba(46, 33, 87, 0.52);
  box-shadow: inset 6px 4px 12px #540d6e;
  margin: 20px 50px;
  padding: 50px;
  p {
    font-family: UASquare;
    font-size: 2.5rem;
    line-height: 1.5;
    color: #920075;
    text-shadow: 0px 0px 15px #920075;
  }
  img {
    max-width: 250px;
  }
`;
class About extends Component {
  render() {
    return (
      <AboutContainer>
        <p>
          Ever since I was young, I've had a passion for making things. This
          aspiration for creation has taken me down a lot of different paths,
          from crafting art in a variety of mediums, to cooking overwhelming
          amounts of food, and even building homes for the homeless. <br />
          <br />I took advantage of every learning opportunity possible,
          networking my way into positions at Whole Foods, Churchill Downs, and
          more. After lots of thought, and encouragement from my family, I
          decided to sign up at Code Louisville. With their guidance, I joined
          the exciting world of Web Development! I have experience in C# .NET,
          Full Stack JavaScript, and more. When I'm not honing these skills, you
          can find me building playlists, filling sketchbooks, and running
          around the neighborhood with my dog. <br /> <br />
          Hope to connect with you soon!{' '}
        </p>
        <img src="../../static/face.png" alt="My Face" />
      </AboutContainer>
    );
  }
}

export default About;
