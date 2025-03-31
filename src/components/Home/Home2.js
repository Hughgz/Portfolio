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
              Hello, my name is <span className="purple">MINH HIEU</span>, and I am a passionate and motivated Software Engineer. I am currently a final-year Information Technology student at Nguyen Tat Thanh University, seeking opportunities to further my career in software development.
              <br />
              <br />
              I have hands-on experience with a variety of technologies, including <span className="purple">Java</span>, <span className="purple">Spring Boot</span>, <span className="purple">.NET</span>, <span className="purple">React</span>, and <span className="purple">Next.js</span>, having developed several real-world applications in the e-commerce and online booking domains. I am particularly proud of projects like <b className="purple">LTH Store</b> and <b className="purple">MH Cinema</b>, where I built both frontend and backend systems, integrated secure payment methods, and used modern UI/UX frameworks to enhance user experience.
              <br />
              <br />
              My experience also includes working with databases like <span className="purple">MySQL</span>, <span className="purple">Azure SQL</span>, and using tools like <span className="purple">Postman</span> and <span className="purple">Selenium</span> for testing. Additionally, I am comfortable with CI/CD processes using <span className="purple">GitHub Actions</span>, and I have a strong understanding of Docker and Azure DevOps for modern cloud-based development.
              <br />
              <br />
              I am excited to contribute to innovative teams and continue to learn and grow as a software developer. My goal is to build scalable, high-performance applications while solving complex challenges in the tech world.
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
                  href="https://www.linkedin.com/in/hieuminh03"
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
