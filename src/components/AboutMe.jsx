import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImage from "../assets/img/image.png";
import TrackVisibility from "react-on-screen";

const AboutMe = () => {
  return (
    <section className="aboutMe" id="aboutMe" style={{ height: "100vh" }}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__bounce animate__delay-2s"
                      : ""
                  }
                >
                  <h1>{`About Me`}</h1>
                  <p>
                    I'm passionate about bringing both the technical and visual aspects of digital products to life.
                  </p>
                  
                  <p> 
                    I like to work at the intersection of curiosity, reasoning
                    and imagination, which helps guide me to uncover insights,
                    (re)frame problems and craft meaningful, future-oriented
                    solutions.
                  </p>

                  <p>
                    My main focus these days is building accessible, inclusive
                    products and digital experiences for a variety of clients.
                    I am passionate about providing solutions to users by building accessible products. Currently solving deceptively simple problems
                    at <a href="https://infosys.com/">Infosys</a>.
                  </p>

                  <p>
                    Feel free to contact me at any of the social above. I always sought out opportunities and challenges that are meaningful to me.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImage} alt="Header Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
