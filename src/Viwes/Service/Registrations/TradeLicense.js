import React, { useEffect, useState } from "react";
import { Footer, Topbar } from "../../../components/Layout";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import CommonBanner from "../../../components/CommonBanner";
import banner from "../../../assets/images/licenses.jpg";
import QuickEnquiryForm from "../../../components/Forms/QuickEnquiryFrom";
import CommonAboutSection from "../../../components/CommonAboutSection";
import {
  TradeLicenseAboutText,
  TradeLicenseCardText,
} from "../../../constants/Paragram";
import CommonCard from "../../../components/Card/CommonCard";
import { Col, Container, Row } from "react-bootstrap";

const TradeLicense = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (TradeLicenseCardText) {
      setCardText1(TradeLicenseCardText[0]?.Gumasta_License);
      setCardText2(TradeLicenseCardText[1]?.Application);
      setCardText3(TradeLicenseCardText[2]?.Processing_Time);
      setCardText4(TradeLicenseCardText[3]?.Verification);
      setCardText5(TradeLicenseCardText[4]?.Validity);
    }
  }, [TradeLicenseCardText]);

  return (
    <>
      <Topbar />
      <ResHeader />
      <CommonBanner text="Trade License" src={banner} />
      <QuickEnquiryForm />
      <CommonAboutSection
        text={TradeLicenseAboutText}
        title="Trade"
        span="License"
      />
      <CommonCard
        cardtilte="Important Aspects Relating"
        cardspan="to Trade License"
        card1="Gumasta License"
        card1text={cardtext1}
        crad2="Application"
        cardtext2={cardtext2}
        card3="Processing Time"
        cardtext3={cardtext3}
        card4="Verification"
        cardtext4={cardtext4}
        card5="Validity"
        cardtext5={cardtext5}
      />
      <section className="hm-about-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec">
              <h2>
                How we help with<span> Trade License</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Requirement Gathering</p>
                <p className="text">
                  An Purminder Kaur & Associates expert will collect the
                  information and documents required for applying for trade
                  license from the concerned Government authority.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Application Submission</p>
                <p className="text">
                  The trade license application will be submitted with the
                  concerned department. An Purminder Kaur & Associates expert
                  will follow up on the status of the application periodically.{" "}
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Registration Certificate</p>
                <p className="text">
                   On obtaining approval, trade license certificate will be forwarded through courier or in-person.
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

export default TradeLicense;
