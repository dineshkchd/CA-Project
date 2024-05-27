import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WhatWeDo = () => {
  return (
    <section className="hm-about-sec">
      <Container>
        <Row>
          <Col className="hm-about-what-sec">
            <h2>
              What <span> We Do</span>
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6 className="text-center mt-4">
              We assist clients in Audits, Tax & Accounting and other services
            </h6>
            <p>
              At Purminder Kaur & Associates, we offer a comprehensive range of
              financial services including Accounting, International Tax and
              Transfer Pricing, Goods and Services Tax (GST), Bookkeeping &
              Income Tax utilizing Tally and QuickBooks Accounting platforms.
              Additionally, we provide Auditing, India Entry Services, Overseas
              Business Setup Services, and a host of other financial solutions
              to meet diverse client needs.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhatWeDo;
