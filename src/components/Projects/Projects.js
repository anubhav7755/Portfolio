import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pro1 from "../../Assets/Projects/pro1.jpg";
import pro2 from "../../Assets/Projects/pro2.png";
import pro3 from "../../Assets/Projects/pro3.png";
import pro4 from "../../Assets/Projects/pro4.jpg";
import pro5 from "../../Assets/Projects/pro5.png";
import pro6 from "../../Assets/Projects/pro6.png";
import pro7 from "../../Assets/Projects/pro7.png";

function Projects() {
  const titleStyle = {
    color: "#FFD700", // Gold color for title
  };

  const durationStyle = {
    color: "#40E0D0", // Teal color for duration
  };

  const featuresStyle = {
    color: "#32CD32", // Lime green color for features
  };

  const featuresWithStyle = (features) =>
    features.map((feature, index) => (
      <li key={index} style={featuresStyle}>
        {feature}
      </li>
    ));

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro7}
              title={<span style={titleStyle}>AI Chatbot</span>}
              duration={<span style={durationStyle}>Januaryy 2024 - June 2023</span>}
              features={featuresWithStyle([
                "Increased user engagement by 25%",
                "Optimised chatbot response time by 30%"
              ])}
              description="An AI chatbot with image URL identification, text-to-speech, and speech-to-text features, integrated with Google and GitHub logins"
              link="https://github.com/anubhav7755/AI-Chatbot.git"
              linkText="View Project"
            />
          </Col>  

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro4}
              title={<span style={titleStyle}>Railway Reservation Portal</span>}
              duration={<span style={durationStyle}>April 2023 - May 2023</span>}
              features={featuresWithStyle([
                "Reduced booking errors by 10%",
                "Optimized database queries by 25%"
              ])}
              description="A portal for checking train times, seat availability, booking tickets, and managing train details."
              link="https://github.com/anubhav7755/Railway-Reservation.git"
              linkText="View Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro2}
              title={<span style={titleStyle}>Online Examination Portal</span>}
              duration={<span style={durationStyle}>December 2022 - May 2023</span>}
              features={featuresWithStyle([
                "Streamlined exam administration for over 100 users",
                "Reduced server load by 20%"
              ])}
              description="An examination portal for adding exam questions, publishing results, and facilitating user exam-taking."
              link="https://github.com/anubhav7755/Online-Exam-Portal.git"
              linkText="View Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro3}
              title={<span style={titleStyle}>Online Notice Board</span>}
              duration={<span style={durationStyle}>July 2023 - November 2023</span>}
              features={featuresWithStyle([
                "Improved notice management efficiency by 20%",
                "Increased notice retrieval speed by 15%"
              ])}
              description="An online notice board for adding, updating, and deleting notices."
              link="https://github.com/anubhav7755/Online-Notice-Board.git"
              linkText="View Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro5}
              title={<span style={titleStyle}>Fitness Tracker</span>}
              duration={<span style={durationStyle}>March 2024</span>}
              features={featuresWithStyle([
                "Enhanced application performance by 40%",
                "Reduced load times by 25%",
                "Increased user goal completion rates by 20%"
              ])}
              description="A user-friendly Next.js based web app aiding progress tracking, goal management, and efficient navigation."
              link="https://github.com/anubhav7755/Fitness-Tracker.git"
              linkText="View Project"
            />
          </Col>  

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro1}
              title={<span style={titleStyle}>Your Tuition Teacher</span>}
              duration={<span style={durationStyle}>January 2023 - June 2023</span>}
              features={featuresWithStyle([
                "Increased user engagement by 25%",
              ])}
              description="A Platform Where Aspiring Teachers Can Get Contacted With The Students Who Are In Need Of Tuition Teacher For The Subject Which They Are Weak At."
              link="https://github.com/anubhav7755/Your-Tuition-Teacher.git"
              linkText="View Project"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro6}
              title={<span style={titleStyle}>Todo App</span>}
              duration={<span style={durationStyle}>June 2023 - July 2023</span>}
              features={featuresWithStyle([
                "User Friendly Interface",
                "Easy Task Management"
              ])}
              description="A Todo App Created Using The conept Of Context API In React"
              link="http://react-todo-app-five-kappa.vercel.app/"
              linkText="View Project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
