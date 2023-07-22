import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
          <h3 className="footer-copywright">Copyright © {year}</h3>
    </Container>
  );
}

export default Footer;
