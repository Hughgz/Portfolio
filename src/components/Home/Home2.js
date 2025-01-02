import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello, my name is <span className="purple">MINH HIEU</span>, and I am currently seeking a position as a 
              <span className="purple"> Java Backend Developer</span>. 
              <br />
              <br />
              I have a strong foundation in <span className="purple">Java</span> and its frameworks, 
              including <b className="purple">Spring MVC</b> and <b className="purple">Spring Security</b>. I have worked with databases like 
              <span className="purple"> MySQL, MSSQL</span>, and <span className="purple">MongoDB</span>, 
              and I am experienced in building <span className="purple">RESTful APIs</span>.
              <br />
              <br />
              I also have hands-on experience with <b className="purple">Docker</b>, 
              <span className="purple"> Azure</span>, and tools like <b className="purple">Postman</b> and <b className="purple">Selenium </b> 
              for testing and ensuring code quality. I am familiar with working in Agile environments, using <b className="purple">Scrum </b> 
               methodologies and tools such as <b>JIRA</b>.
              <br />
              <br />
              My ultimate goal is to contribute to scalable and high-performance backend systems while continuously learning and growing in this dynamic field.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Hughgz"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vo-minh-hieu-855147300/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
