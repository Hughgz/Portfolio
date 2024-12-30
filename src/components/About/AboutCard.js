import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vo Minh Hieu </span>
            <br />
            I am currently studying software engineering, focusing on Java
            backend development.
            <br />
            I am working on improving my problem-solving and data structure
            skills, and I am eager to learn new technologies and grow as a
            developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Marvel
            </li>
            <li className="about-activity">
              <ImPointRight /> Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Listen to music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            " If you're not smarter than others, you have to put in more time
            than they do!"{" "}
          </p>
          <footer className="blockquote-footer">Minh Hieu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
