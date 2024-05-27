import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/images/ca_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faClock ,faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faSquareInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Topbar() {
  return (
    <>
      <div className="top-header-fixed" id="header-top-fixed"></div>
      <header className="top-header">
      <div className="topbar">
          <Container fluid>
            <Row>
              <Col xs={12} md={6}>
                <div className="top-lt-info">
                  <div className="top-info-d">
                    <FontAwesomeIcon icon={faEnvelope} />
                    &nbsp;
                    <span> info@capka.co.in</span>
                  </div>
                  <div className="top-info-d">
                    <FontAwesomeIcon icon={faPhone} />
                    &nbsp;
                    <span>+91 964-687-4599</span>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="pull-right">
                  <div className="top-lt-info social-top">
                    <ul>
                      <li>Connect With <span>Us</span></li>
                      <li><a className="icon-fa-facebook" href="#" target="_blank"><FontAwesomeIcon icon={faSquareInstagram} className="icon" /></a></li>
                      <li><a href="#" target="_blank"><FontAwesomeIcon icon={faFacebook} className="icon" /></a></li>
                      <li><a className="icon-fa-instagram" href="#" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="icon" /></a></li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Navbar className="bg-body-tertiary topbar-nav" expand="md">
          <Container>
            <Navbar.Brand href="#home">
              <img src={Logo} alt="" srcset="" width={180}/>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <ul>
                  <li><FontAwesomeIcon icon={faClock} /> <span>Mon-Sat: 09.00 - 07.00</span></li>
                  <li className="last"> <FontAwesomeIcon icon={faRightToBracket} />&nbsp; <span>LOGIN</span></li>
                </ul>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

    </>
  );
}

export default Topbar;
