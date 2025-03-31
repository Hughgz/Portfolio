import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vo Minh Hieu</span>
            <br />
            I am a proactive learner with a passion for technology and a proven track record of delivering impactful projects. My experience in developing full-stack applications, managing databases like MySQL and Azure, and deploying solutions on platforms like Azure and Vercel showcases my technical expertise.
            <br />
            <br />
            Beyond technical skills, I have demonstrated my ability to work well in teams and adapt to challenges through my participation in hackathons and collaborative projects. My drive to continually improve and my enthusiasm for learning make me confident in my ability to contribute to innovative teams and make a meaningful impact.
            <br />
            <br />
            I believe my technical abilities, combined with my passion and eagerness to learn, make me a strong fit for any software engineering team.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Passionate about coding and technology
            </li>
            <li className="about-activity">
              <ImPointRight /> Skilled in full-stack development and database management
            </li>
            <li className="about-activity">
              <ImPointRight /> Eager to learn and adapt to new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Strong collaborator and team player
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
