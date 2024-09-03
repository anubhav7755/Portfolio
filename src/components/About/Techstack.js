import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiC  } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiJava,
  DiCss3,
} from "react-icons/di";
import { 
  FaHtml5, 
  FaDatabase, 
  FaCloud, 
  FaAws 
} from 'react-icons/fa';
import { 
  SiMysql, 
  SiMongodb, 
  SiNextdotjs, 
  SiMicrosoftazure,  
} from 'react-icons/si';

function Techstack() {
  const techIconStyle = {
    textAlign: "center",
    margin: "5px 0",
    fontSize: "1.5em", // Size of icons
  };

  const techNameStyle = {
    fontSize: "0.6em", // Font size of text
    marginTop: "3px",
    color: "#40E0D0", // Text color
  };

  const containerStyle = {
    justifyContent: "center",
    paddingBottom: "30px", // Padding at the bottom
  };

  return (
    <Row style={containerStyle}>
      {/* Languages */}
      <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
        <SiC  />
        <p style={techNameStyle}>C</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
        <DiJavascript1 />
        <p style={techNameStyle}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
        <FaHtml5 />
        <p style={techNameStyle}>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
        <DiCss3 />
        <p style={techNameStyle}>CSS</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
        <DiPython />
        <p style={techNameStyle}>Python</p>
      </Col>

      {/* Frameworks */}
      <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
        <DiNodejs />
        <p style={techNameStyle}>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
        <DiReact />
        <p style={techNameStyle}>React.js</p>
      </Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
        <FaDatabase />
        <p style={techNameStyle}>SQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
        <SiMysql />
        <p style={techNameStyle}>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={techIconStyle}>
        <SiMongodb />
        <p style={techNameStyle}>MongoDB</p>
      </Col>

      {/* Cloud Platforms */}
      
    </Row>
  );
}

export default Techstack;
