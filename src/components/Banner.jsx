import React from "react";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImage from "../assets/img/header-img.svg";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import 'animate.css'
import TrackVisibility from "react-on-screen";

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Engineer", "Full Stack Developer", "Problem Solver"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100); 
    const period = 2000;
    const tick = () => {
        let idx = loopNum % toRotate.length;
        let fullText = toRotate[idx];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    useEffect(() => {
      let ticker = setInterval(() => {
        tick()
      }, delta)
    
      return () => {clearInterval(ticker)};
    }, [text])
    
  return (
    <section className="banner" id="home" style = {{height:"100vh"}}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__bounce animate__delay-2s" : ""}>
                  <span className="tagline">Brings ideas to life with code.</span>
                  <h1>
                    {`Hi I'm Neelabh Singh. `}
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    I am software engineer currently based at Delhi, India. 
                  </p>
                  <button onClick={() => console.log("connect on banner")}>
                      <a href="https://www.linkedin.com/in/neelabh04" style={{ color: 'white' }}>
                        Let's Connect 
                        <ArrowRightCircle color="white" size={25} />
                      </a>
                  </button>
                </div>}
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

export default Banner;
