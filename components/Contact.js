import React, { Component } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  border: 8px solid rgba(46, 33, 87, 0.52);
  box-shadow: inset 6px 4px 12px #540d6e;
  margin: 20px 50px;
  padding: 50px;
  p {
    font-size: 3rem;
    color: #fd3777;
    text-shadow: 0px 0px 16px #ff3864;
  }
  a {
    font-family: basis33;
    font-size: 4rem;
    color: #f9c80e;
    text-shadow: 0px 0px 16px #f9c80e;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;
const Links = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  a {
    padding: 25px;
  }
`;
class Contact extends Component {
  render() {
    return (
      <ContactContainer>
        <div>
          <p>
            I am currently available for hire! Please email me at this address :
          </p>
          <a href="mailto:zsteig93@gmail.com">zsteig93@gmail.com</a>
          <p>
            Otherwise, please feel free to reach out to me on the following
            platforms:
          </p>
        </div>
        <Links>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/zsteiger/">
            LinkedIn
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/ZSteiger">
            GitHub
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/zackSteiger">
            @twitter
          </a>
        </Links>
      </ContactContainer>
    );
  }
}

export default Contact;
