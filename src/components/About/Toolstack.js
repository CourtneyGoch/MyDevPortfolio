import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiAdobe,
  SiAdobecreativecloud,
  SiAirtable,
  SiApollographql
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobe />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApollographql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobecreativecloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAirtable />
      </Col>
    </Row>
  );
}

export default Toolstack;
