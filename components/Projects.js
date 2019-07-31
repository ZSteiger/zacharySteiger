import React, { Component } from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  margin: 25px;
  h1 {
    font-family: basis33;
    font-weight: 300;
    font-size: 6rem;

    color: #f9c80e;
    text-shadow: 0px 0px 16px #f9c80e;
  }
  a {
    font-family: basis33;
    font-size: 3rem;
    color: #f9c80e;
    text-shadow: 0px 0px 16px #f9c80e;
  }
  p {
    font-family: UASquare;
    font-size: 3rem;
    color: #920075;

    text-shadow: 0px 0px 16px #920075;
  }
`;

const ProjectCell = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr;
  padding: 25px;
  margin: 0 0 20px 0;
  background: rgba(36, 23, 52, 0.51);
  border: 8px solid rgba(46, 33, 87, 0.52);
  box-shadow: inset 6px 4px 12px #540d6e;
  .imagePane {
    & > * {
      max-width: 500px;
      display: flex;
      padding: 5px;
      flex-direction: column;
    }
  }
`;

class Projects extends Component {
  render() {
    return (
      <ProjectsContainer>
        <ProjectCell>
          <div className="infoPane">
            <h1>Folck Photo</h1>
            <p>
              Folck Photo is a photo gallery devoted to the works of Bruce
              Folck, a photographer based out of Oakland, CA.
            </p>
            <a href="http://www.folckphoto.com">
              Click here to visit Folck Photo
            </a>
          </div>
          <div className="imagePane">
            <img
              src="../static/folckPhoto1.png"
              alt="Photo of Folck Photo Home"
            />

            <img
              src="../static/folckPhoto2.png"
              alt="Photo of Folck Photo Gallery"
            />
          </div>
        </ProjectCell>

        <ProjectCell>
          <h1>Thoroughbred Network</h1>
          <p>
            Thoroughbred Network is a blog dedicated to all things horse-racing.
            This website is still in production.
          </p>
          <img src="" alt="" />
          <img src="" alt="" />
        </ProjectCell>
      </ProjectsContainer>
    );
  }
}
export default Projects;
