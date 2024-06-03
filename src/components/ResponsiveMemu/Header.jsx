import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-taxcenter.jpg";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";




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
            height: scrolled ? "10vh" : "12vh", // Change height to auto to ensure content is visible
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
                    style={{ width: "80px", marginTop: "5px" }}
                  />
                </Link>
              </div>
            </Col>
            <Col>
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
