import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi , I am <span className="purple">Maneel Chauhan </span>
            from <span className="purple"> Uttar Pradesh, India.</span>
            <br /> 
            Currently persuinging my B.Tech degree in EEE from Vellore Institute Of Technology, Vellore.
          
            <br />
            <br />
            Extra Curricular activities that I do during free time!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
