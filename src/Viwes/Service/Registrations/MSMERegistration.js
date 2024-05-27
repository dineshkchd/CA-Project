import React, { useEffect, useState } from "react";
import { Footer, Topbar } from "../../../components/Layout";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import CommonBanner from "../../../components/CommonBanner";
import banner from "../../../assets/images/Registration.jpg";
import QuickEnquiryForm from "../../../components/Forms/QuickEnquiryFrom";
import CommonAboutSection from "../../../components/CommonAboutSection";
import {
  MSMERegistrationAboutText,
  MSMERegistrationCardText,
} from "../../../constants/Paragram";
import CommonCard from "../../../components/Card/CommonCard";
import { Col, Container, Row } from "react-bootstrap";

const MSMERegistration = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (MSMERegistrationCardText) {
      setCardText1(MSMERegistrationCardText[0]?.MSME_Registration);
      setCardText2(MSMERegistrationCardText[1]?.Small_Enterprise);
      setCardText3(MSMERegistrationCardText[2]?.Medium_Enterprise);
      setCardText4(MSMERegistrationCardText[3]?.Registratio_Criteria);
      setCardText5(MSMERegistrationCardText[4]?.Micro_Enterprises);
    }
  }, [MSMERegistrationCardText]);

  return (
    <>
      <Topbar />
      <ResHeader />
      <CommonBanner text="MSME Registration" src={banner} />
      <QuickEnquiryForm />
      <CommonAboutSection
        text={MSMERegistrationAboutText}
        title="MSME"
        span="Registration"
      />
      <CommonCard
        cardtilte="Reasons to Register "
        cardspan="a MSME"
        card1="MSME_Registration"
        card1text={cardtext1}
        crad2="Small Enterprise"
        cardtext2={cardtext2}
        card3="Medium Enterprise"
        cardtext3={cardtext3}
        card4="Registration Criteria"
        cardtext4={cardtext4}
        card5="Micro Enterprises"
        cardtext5={cardtext5}
      />
      <section className="hm-about-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec">
              <h2>
                How we help with <span> MSME Registration</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Application Preparation</p>
                <p className="text">
                  An Purminder Kaur & Associates Financial Expert will prepare
                  your MSME Application along with the necessary supporting
                  documents that needs to be submitted for MSME Regisration.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Application Processing</p>
                <p className="text">
                  Once the application is prepared and submitted, the concerned
                  MSME Office will process the application and may request for
                  more information or documents (if required).
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">MSME Registration</p>
                <p className="text">
                  While processing the application, if required an Purminder
                  Kaur & Associates Financial Expert will help respond to any
                  query or request for document and obtain MSME Registration.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default MSMERegistration;
