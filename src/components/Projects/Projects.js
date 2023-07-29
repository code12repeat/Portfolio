import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TinDog from "../../Assets/Projects/TinDog.png";
import Parabola from "../../Assets/Projects/Parabola.png";
import Laptop from "../../Assets/Projects/Laptop.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Parabola}
              // isBlog={false}
              title="Parabola"
              description="This is the library for parabola equation in which functions are defined to calculate vetex,focus,focal length of parabola."
              ghLink="https://github.com/code12repeat/parabola-library"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Laptop}
              title="Laptop Price Prediction"
              description="Laptop price prediction built in python where price of laptoon can be predicted on the basis of their specifications like RAM, HDD/SSD, touch, gaming etc."
              ghLink="https://github.com/code12repeat/Laptop-Price-Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TinDog}
              title="TinDog"
              description="Static Commercial website to for purchaging different breeds of dog."
              ghLink="https://github.com/code12repeat/Dog_purchase_site"             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
