import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import codeforces from "../../Assets/Projects/codeforces.png";
import codechef from "../../Assets/Projects/codechef.png";
import leetcode from "../../Assets/Projects/leetcode.jpg";
import gfg from "../../Assets/Projects/gfg.png";
import CodingCards from "./CodingCards";

function Coding() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Coding <strong className="purple">Profiles </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CodingCards
              imgPath={leetcode}
              title="Leetcode"
              Link="https://leetcode.com/code12repeat/"
            />
          </Col>

          <Col md={4} className="project-card">
            <CodingCards
              imgPath={gfg}
              title="GeeksForGeeks"
              Link="https://auth.geeksforgeeks.org/user/maneel_chauhan/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"
            />
          </Col>

          <Col md={4} className="project-card">
            <CodingCards
              imgPath={codechef}
              title="CodeChef"
             Link="https://www.codechef.com/users/code12repeat"             
            />
          </Col>

          <Col md={4} className="project-card">
            <CodingCards
              imgPath={codeforces}
              title="CodeForces"
              Link="https://codeforces.com/profile/maneel_chauhan"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Coding;
