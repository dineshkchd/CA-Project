import React, { useEffect, useState } from "react";
import { Footer, Topbar } from "../../../components/Layout";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import CommonBanner from "../../../components/CommonBanner";
import banner from "../../../assets/images/Registration.jpg";
import QuickEnquiryForm from "../../../components/Forms/QuickEnquiryFrom";
import CommonAboutSection from "../../../components/CommonAboutSection";
import {
  PFRegistrationAboutText,
  PFRegistrationCardText,
} from "../../../constants/Paragram";
import CommonCard from "../../../components/Card/CommonCard";
import { Col, Container, Row } from "react-bootstrap";

const PFRegistration = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (PFRegistrationCardText) {
      setCardText1(PFRegistrationCardText[0]?.PF_Return);
      setCardText2(PFRegistrationCardText[1]?.APF_Payment);
      setCardText3(PFRegistrationCardText[2]?.Unified_Portal);
      setCardText4(PFRegistrationCardText[3]?.UAN);
      setCardText5(PFRegistrationCardText[4]?.PF_Withdrawal);
    }
  }, [PFRegistrationCardText]);

  return (
    <>
      <Topbar />
      <ResHeader />
      <CommonBanner text="PF Registration" src={banner} />
      <QuickEnquiryForm />
      <CommonAboutSection
        text={PFRegistrationAboutText}
        title="PF"
        span="Registration"
      />
      <CommonCard
        cardtilte="Important Aspects Relating"
        cardspan="to PF Registration"
        card1="PF Return"
        card1text={cardtext1}
        crad2="PF Payment"
        cardtext2={cardtext2}
        card3="Unified Portal"
        cardtext3={cardtext3}
        card4="UAN"
        cardtext4={cardtext4}
        card5="PF Withdrawal"
        cardtext5={cardtext5}
      />
      <section className="hm-about-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec">
              <h2>
                How we help with<span>PF registration</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Requirement Gathering</p>
                <p className="text">
                  An Purminder Kaur & Associates Expert will discuss your
                  business requirements and collect relevant employee data and
                  documents to begin the process for applying for PF
                  registration.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Application Submission</p>
                <p className="text">
                  The PF registration application will be submitted for the
                  organisation in the prescribed format.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Registration</p>
                <p className="text">
                  Purminder Kaur & Associates expert will provide the PF
                  registration number for your business and the UAN number for
                  your employees.
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

export default PFRegistration;
