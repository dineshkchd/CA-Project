import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function MyComponent({ title, span, text, src }) {
  return (
    <section className="hm-about-sec">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <h2 className="hm-about-title">
              {title}  &nbsp;
              <span>{span} </span>
            </h2>
            <p>
              {text}
            </p>
          </Col>
          <Col md={6}>
            <img
              alt="aboutimage"
              src={src}
              className="aboutimage jumping-animation"
            
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MyComponent;
