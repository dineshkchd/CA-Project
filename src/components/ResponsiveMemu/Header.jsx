import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/ca_logo.png";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";




const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  // Effect to add event listener for scroll when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container fluid>
      <div className={isSticky ? "sticky-header" : ""}>
        <header
          className={`responsive-header ${scrolled ? "scrolled" : ""}`}
          style={{
            // boxShadow:
            //   "0 1px 3px 0 rgba(0, 0, 0, 0.07), 0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            background: scrolled ? "#fff" : "#fff",
            color: scrolled ? "#000" : "#000",
            position: "sticky",
            top: 0,
            zIndex: 1000,
            height: scrolled ? "18vh" : "18vh", // Change height to auto to ensure content is visible
            transition: "background-color 0.3s ease", // Smooth transition for background color change
          }}
        >
          <Row>
            <Col xs lg="2">
              <div className="nav-area">
                <Link to="/">
                  <img
                    src={Logo}
                    alt=""
                    className="header-logo"
                    style={{ width: "200px", marginTop: "-26px" }}
                  />
                </Link>
              </div>
            </Col>
            <Col>
              <div className="header-phone text-end ml-5">
                <Button>
                  <a href="/schedule-call"> Schedule a Call</a>
                 </Button>
                {/* <a href="tel:+91 964-687-4599">
                  <FontAwesomeIcon icon={faPhoneSquare} size="xl" />
                  &nbsp;&nbsp; +91 964-687-4599
                </a> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                <a href="mailto:info@capka.co.in">
                <FontAwesomeIcon icon={faEnvelope} size="xl" /> &nbsp;&nbsp; 
                  info@capka.co.in</a> */}
              </div>
              <Navbar />
              <MobileNav />
            </Col>
          </Row>
        </header>
      </div>
    </Container>
  );
};

export default Header;
