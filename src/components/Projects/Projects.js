import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/ggss.jpeg";
import emotion from "../../Assets/Projects/password.png";
import editor from "../../Assets/Projects/schedule.png";
import chatify from "../../Assets/Projects/gamersgauntlet.png";
import suicide from "../../Assets/Projects/team.png";
import bitsOfCode from "../../Assets/Projects/techblog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Gamer's Gauntlet Quiz"
              description="GamerGauntlet App is a thrilling quiz game that will put your knowledge of video games to the test. The app features an extensive range of questions covering both classic and modern games, characters, storylines, and gameplay mechanics. With such a diverse range of topics, you'll never run out of challenging questions to answer."
              ghLink="https://github.com/GarrettAnderson/react-gamers-gauntlet"
              demoLink="https://calm-anchorage-14292.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Tech Blog"
              description="A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. Using express.js, Handlebars, MySQL and sequelize."
              ghLink="https://github.com/CourtneyGoch/TechByteBlog"
              demoLink="https://whispering-headland-27834.herokuapp.com/dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Work Scheduler App"
              description="A Day/Work Schedule

              A Daily Planner, laid out in color-coded blocks with user-friendly interface to add events with dates and times. See Issue #1 for User story and Acceptance Criteria"
              ghLink="https://github.com/CourtneyGoch/NoTimeWasted"
              demoLink="https://courtneygoch.github.io/NoTimeWasted/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Quiz App Alpha"
              description="GamerGauntlet App is a fun and challenging quiz game that tests your knowledge of video games. With a wide variety of questions covering classic and modern games, characters, storylines, gameplay mechanics, and more, you'll be sure to find something to challenge your gaming expertise."
              ghLink="https://github.com/GarrettAnderson/gamers-gauntlet"
              demoLink="https://powerful-inlet-74359.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Employee Tracker App"
              description="Creating an application that will generate basic info for employees with ease.

              With this application the user will be able to quickly view team's gitHub's profiles.
              
              I learned how to use node effectively to generate html files.
              
              This project stands out because of it's ease of use and readibility of the final html generated."
              ghLink="https://github.com/CourtneyGoch/TeamWorkDreamWork"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Password Generator"
              description="Creating a Password Generator!

              This website will run a code in which alerts will prompt the user to generate a unique password based on established parameters."
              ghLink="https://github.com/CourtneyGoch/WhatsThePasswordn"
              demoLink="https://courtneygoch.github.io/WhatsThePassword/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
