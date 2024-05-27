import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SupportCard from "../Card/SupportCard";

const Supportsection = () => {
  return (
    <>
      <section className="hm-services-sec">
        <Container>
          <Row>
            <Col className="hm-services-title">
              <h2>
                Reason To Choose
                <span>
                  <br /> Purminder Kaur & Associates
                </span>
              </h2>
              <p>
                For over a decade, we've fostered trust and sustainable
                relationships, continuously adding value to our clients'
                ventures. We're not just service providers; we're partners in
                your growth journey. Our approach isn't to work for our clients,
                but to work with them collaboratively. With a primary focus on
                understanding our clients' businesses and needs, we tailor
                solutions that ensure mutual success, maintaining this
                commitment year after year.
              </p>
            </Col>
            <Col xs lg="7">
              <SupportCard />
            </Col>
          </Row>
          <Row>
            
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Supportsection;
