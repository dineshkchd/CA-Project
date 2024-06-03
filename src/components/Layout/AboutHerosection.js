import React from "react";
import { Container, Row, Col,Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBusinessTime } from "@fortawesome/free-solid-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";

function AboutHerosection({ src }) {
  return (
    <section className="hm-about-sec">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={12} className="text-center text-md-left">
            <div className="hero">
              <h1>We're Tax Center</h1>
              <h3>A New Breed of Accountants</h3>
            </div>
          </Col>
          <Col xs={12} md={12} className="text-center">
            <div className="mb-5 hero-btn">
              <button className="left-btn">
              <FontAwesomeIcon
                icon={faUser}
                size="sm"
                style={{ color: "#fff" }} 
              />   Personal
              </button>
              <button className="right-btn">
              <FontAwesomeIcon
                icon={faBusinessTime}
                size="sm"
                style={{ color: "#fff" }} 
              />  Business
              </button>
            </div>
            <div className="">
              <button className="bottom-btn">
              <FontAwesomeIcon
                icon={faLaptop}
                size="sm"
                style={{ color: "#fff" }} 
              /> Booking Online Tax Return
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutHerosection;
