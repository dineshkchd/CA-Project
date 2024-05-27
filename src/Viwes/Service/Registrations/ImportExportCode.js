import React, { useEffect, useState } from "react";
import { Footer, Topbar } from "../../../components/Layout";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import CommonBanner from "../../../components/CommonBanner";
import banner from "../../../assets/images/Registration.jpg";
import QuickEnquiryForm from "../../../components/Forms/QuickEnquiryFrom";
import CommonAboutSection from "../../../components/CommonAboutSection";
import {
  ImportExportCodeAboutText,
  ImportExportCodeCardText,
} from "../../../constants/Paragram";
import CommonCard from "../../../components/Card/CommonCard";
import { Col, Container, Row } from "react-bootstrap";

const ImportExportCode = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");
  const [cardtext6, setCardText6] = useState("");
  const [cardtext7, setCardText7] = useState("");

  useEffect(() => {
    if (ImportExportCodeCardText) {
      setCardText1(ImportExportCodeCardText[0]?.Importers_Require_IE_Code);
      setCardText2(ImportExportCodeCardText[1]?.No_Return_Filing);
      setCardText3(ImportExportCodeCardText[2]?.Proprietors_can_have_IE_Code);
      setCardText4(ImportExportCodeCardText[3]?.Exporters_Require_IE_Code);
      setCardText5(ImportExportCodeCardText[4]?.Lifetime_NO_Renewal);
      setCardText6(ImportExportCodeCardText[5]?.Identity_and_Business_Proof);
      setCardText7(ImportExportCodeCardText[6]?.Cancelled_Cheque_Copy);
    }
  }, [ImportExportCodeCardText]);

  return (
    <>
      <ResHeader />
      <CommonBanner text="MSME Registration" src={banner} />
      <QuickEnquiryForm />
      <CommonAboutSection
        text={ImportExportCodeAboutText}
        title="MSME"
        span="Registration"
      />
      <CommonCard
        cardtilte="Reasons to Register "    
        cardspan="a IE Code"
        card1="Importers Require IE Code"
        card1text={cardtext1}
        crad2="No Return Filing"
        cardtext2={cardtext2}
        card3="Proprietors can have IE Code"
        cardtext3={cardtext3}
        card4="Exporters Require IE Code"
        cardtext4={cardtext4}
        card5="Lifetime NO Renewal"
        cardtext5={cardtext5}
        card6="Identity and Business Proof"
        cardtext6={cardtext5}
        card7="Cancelled Cheque Copy"
        cardtext7={cardtext5}
      />
      <section className="hm-about-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec">
              <h2>
                How we help with <span> IEC code registration</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Application Preparation</p>
                <p className="text">
                  An Purminder Kaur & Associates Tax Expert will prepare your IE
                  Code Application in the prescribed format along with the
                  necessary supporting documents and obtain your signature in
                  the application.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Application Processing</p>
                <p className="text">
                  Once the application is prepared, Purminder Kaur & Associates
                  will submit the IE Code Application to the Directorate General
                  of Foreign Trade for further processing and allotment of IE
                  Code.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">IE Code Allotment</p>
                <p className="text">
                  Once the application and the attached supporting documents are
                  verified, the Directorate General of Foreign Trade will allot
                  a IE Code for your business.
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

export default ImportExportCode;
