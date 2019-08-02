import React, { Component } from 'react';
import styled from 'styled-components';
import { ProjectsContainer, ProjectCell } from './styles/ProjectsStyles';

class Projects extends Component {
  render() {
    return (
      <ProjectsContainer>
        <ProjectCell>
          <div className="infoPane">
            <h1>Folck Photo</h1>
            <p>
              Folck Photo is a photo gallery devoted to the works of Bruce
              Folck, a photographer based out of Oakland, CA. <br /> The project
              is currently built using NextJS, with images hosted via
              Cloudinary.
            </p>
            <a
              href="http://www.folckphoto.com"
              rel="noopener noreferrer"
              target="_blank">
              Click here to visit Folck Photo
            </a>
          </div>
          <div className="imagePane">
            <img
              src="/static/folckPhoto1.png"
              alt="Photo of Folck Photo Home"
            />

            <img
              src="/static/folckPhoto2.png"
              alt="Photo of Folck Photo Gallery"
            />
          </div>
        </ProjectCell>

        <ProjectCell>
          <div className="infoPane">
            <h1>Thoroughbred Network</h1>
            <p>
              Thoroughbred Network is a blog dedicated to all things
              horse-racing. Using a React / Prisma / Apollo / GraphQL Stack,
              users will be able to view daily news updates on horse racing.{' '}
              <br />
              <br />
              This website is still in production.
            </p>
          </div>
          <div className="imagePane">
            <img src="/static/tn1.png" alt="Thoroughbred Network Example" />
          </div>
        </ProjectCell>
      </ProjectsContainer>
    );
  }
}
export default Projects;
