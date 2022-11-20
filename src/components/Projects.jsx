import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import weatherProject from "../assets/img/weatherProject.png";

import projImg2 from "../assets/img/project-img2.png";
import stickyNotes from "../assets/img/stickyNotes.png";

import projImg3 from "../assets/img/project-img3.png";
import orderSummary from "../assets/img/orderSummary.jpg";

import footerBg from "../assets/img/footer-bg.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    // {
    //   title: "Realtime Chat Application",
    //   description: "Currently working on building a realtime chat application in which user can authenticate and chat in realtime",
    //   imgUrl: projImg1,
    //   // projectUrl: ''
    // },
    {
      title: "Weather Widget",
      description: "Shows the weather of the input location using Open Weather API",
      imgUrl: weatherProject,
      projectUrl: 'https://weather-widget-101.netlify.app/'
    },
    {
      title: "Sticky Notes",
      description: "Simple notes app which stores the information using browser storage",
      imgUrl: stickyNotes,
      projectUrl: 'https://notes-app-10.netlify.app/'
    },
    // {
    //   title: "Monday CRM Clone",
    //   description: "Currently on building a kanban board like in Monday.com",
    //   imgUrl: projImg2,
    //   // projectUrl: 'https://notes-app-10.netlify.app/'
    // },
    {
      title: "Order Summary Component",
      description: "Created a single page order summary component using HTML and CSS",
      imgUrl: orderSummary,
      projectUrl: 'https://github.com/neelabh04/Order-Summary-Component'
    },
  ];

  return (
    <section className="project" id="projects"  style={{ height: "100vh" }}>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__bounce": ""}>
                <h2>Projects</h2>
                <p>These are some of the projects which I built using the tools and technologies. You check them out by clicking on the links</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={footerBg}></img>
    </section>
  )
}

export default Projects