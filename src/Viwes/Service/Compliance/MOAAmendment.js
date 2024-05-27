import React, { useEffect, useState } from "react";
import { Footer } from "../../../components/Layout";
import CommonAboutSection from "../../../components/CommonAboutSection";
import CommonCard from "../../../components/Card/CommonCard";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import {
  MOAAmendmentAboutText,
  MOAAmendmentCardText,
} from "../../../constants/Paragram";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import TitleSection from "../../../components/TitleSection";

const MOAAmendment = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (MOAAmendmentCardText) {
      setCardText1(MOAAmendmentCardText[0]?.Object_Clause);
      setCardText2(MOAAmendmentCardText[1]?.Name_Clause);
      setCardText3(MOAAmendmentCardText[2]?.Liability_Clause);
      setCardText4(MOAAmendmentCardText[3]?.Situation_Clause);
      setCardText5(MOAAmendmentCardText[4]?.Capital_Clause);
    }
  }, [MOAAmendmentCardText]);
  return (
    <>
      <ResHeader />
      <QuickEnquiryFrom />
      {/* <CommonAboutSection
        text={MOAAmendmentAboutText}
        title="MOA"
        span="Amendment"
      /> */}
      <CommonCard
        cardtilte="Major Clauses in"
        cardspan="Memorandum of Association"
        card1="Object Clause"
        card1text={cardtext1}
        crad2="Name Clause"
        cardtext2={cardtext2}
        card3="Liability Clause"
        cardtext3={cardtext3}
        card4="Situation Clause"
        cardtext4={cardtext4}
        card5="Capital Clause"
        cardtext5={cardtext5}
      />
      <section className="hm-about-sec help-with-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec">
              <h2>
                How we help with memorandum
                <span> of association amendment</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Advisory</p>
                <p className="text">
                  A Business Expert will review the present and proposed MOA of
                  company and the Articles of Association to understand the
                  background of the Company prior to beginning the process. The
                  review would take 1 – 3 working days.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Board Resolutions</p>
                <p className="text">
                  Once you obtain an understanding of the procedures involved in
                  MOA amendment, our Experts will draft the necessary
                  Resolutions for the procedure.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Filing</p>
                <p className="text">
                  Once the Board Resolutions are passed, our Experts will
                  prepare and file the necessary documents with the Ministry of
                  Corporate Affairs to complete the MOA Amendment.
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

export default MOAAmendment;
