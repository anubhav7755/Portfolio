import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Anubhav Roy </span>
            from <span className="purple"> West Bengal, India.</span>
            I have completed B.Tech on 2023 from Guru Nanak Institute Of Technology.
            <br />
            <br />
            Apart from <span className="purple">Coding</span>, some other activities that I love to do!
          </p>
          <span className="purple">
          <ul>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          </span>
          <p style={{ color: "#40E0D0" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Anubhav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
