import React, { useEffect, useState } from "react";
import { Footer } from "../../../components/Layout";
import CommonAboutSection from "../../../components/CommonAboutSection";
import CommonCard from "../../../components/Card/CommonCard";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import {
  RegisteredOfficeChangeAboutText,
  RegisteredOfficeChangeCardText,
} from "../../../constants/Paragram";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import TitleSection from "../../../components/TitleSection";

const RegisteredOfficeChange = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (RegisteredOfficeChangeCardText) {
      setCardText1(RegisteredOfficeChangeCardText[0]?.Registered_Office);
      setCardText2(RegisteredOfficeChangeCardText[1]?.Books_of_Accounts);
      setCardText3(RegisteredOfficeChangeCardText[2]?.Within_City_Change);
      setCardText4(RegisteredOfficeChangeCardText[3]?.Residential_Address);
      setCardText5(RegisteredOfficeChangeCardText[4]?.Inter_State_Change);
    }
  }, [RegisteredOfficeChangeCardText]);
  return (
    <>
      <ResHeader />
      <QuickEnquiryFrom />
      {/* <CommonAboutSection
        text={RegisteredOfficeChangeAboutText}
        title="Registered Office"
        span="Changes"
      /> */}
      <CommonCard
        cardtilte="Reasons to Registered"
        cardspan="Office Changes"
        card1="Registered Office"
        card1text={cardtext1}
        crad2="Books of Accounts"
        cardtext2={cardtext2}
        card3="Within City Change"
        cardtext3={cardtext3}
        card4="Residential Address"
        cardtext4={cardtext4}
        card5="Inter-State Change"
        cardtext5={cardtext5}
      />
      <section className="hm-about-sec help-with-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec">
              <h2>
                How we help with <span> Registered Office Change</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Advisory</p>
                <p className="text">
                  The procedure for changing the Registered Office of a company
                  depends on the nature of change. Our Experts will advice you
                  on the procedure relevant for you.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Board Resolutions</p>
                <p className="text">
                  Once your obtain an understanding of the procedures involved
                  in changing the Registered Office of your Company, our Experts
                  will draft the necessary Resolutions for the procedure.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Filing</p>
                <p className="text">
                  Once the Board Resolutions are passed, our Experts will
                  prepare and file the necessary documents with the Ministry of
                  Corporate Affairs to register the change of address of the
                  Registered Office.
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

export default RegisteredOfficeChange;
