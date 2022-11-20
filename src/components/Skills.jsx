import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

import html5 from '../assets/img/html5.svg'
import css from '../assets/img/css.svg'
import sass from '../assets/img/sass.svg'
import javascript from '../assets/img/javascript.svg'
import node from '../assets/img/node.svg'
import react from '../assets/img/react.svg'
import mongodb from '../assets/img/mongodb.svg'
import mysql from '../assets/img/mysql.svg'
import express from '../assets/img/express.svg'
import postman from '../assets/img/postman.svg'
import git from '../assets/img/git.svg'
import githubDark from '../assets/img/github-dark.svg'


const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills" style = {{height:"100vh"}}>
        <Container>
            <Row>
                <Col>
                <div className="skill-bx">
                    <h2>Weapons of Choice</h2>
                    <p>These are the tools and technologies which I work with.</p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                            <img src={html5} alt="Image" />
                            <h5>HTML</h5>
                        </div>
                        <div className="item">
                            <img src={css} alt="Image" />
                            <h5>CSS</h5>
                        </div>
                        <div className="item">
                            <img src={sass} alt="Image" />
                            <h5>SASS</h5>
                        </div>
                        <div className="item">
                            <img src={javascript} alt="Image" />
                            <h5>JavaScript</h5>
                        </div>
                        <div className="item">
                            <img src={react} alt="Image" />
                            <h5>ReactJs</h5>
                        </div>
                        <div className="item">
                            <img src={node} alt="Image" />
                            <h5>NodeJs</h5>
                        </div>
                        <div className="item">
                            <img src={express} alt="Image" />
                            <h5>ExpressJs</h5>
                        </div>
                        <div className="item">
                            <img src={mongodb} alt="Image" />
                            <h5>MongoDB</h5>
                        </div>
                        <div className="item">
                            <img src={mysql} alt="Image" />
                            <h5>MySQL</h5>
                        </div>
                        <div className="item">
                            <img src={postman} alt="Image" />
                            <h5>PostMan</h5>
                        </div>
                        <div className="item">
                            <img src={git} alt="Image" />
                            <h5>Git</h5>
                        </div>
                        <div className="item">
                            <img src={githubDark} alt="Image" />
                            <h5>Github</h5>
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        <img src={colorSharp} alt="" className="background-image-left" />
    </section>
  )
};

export default Skills;
