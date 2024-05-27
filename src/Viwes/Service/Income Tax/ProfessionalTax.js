import React, { useEffect, useState } from "react";
import { Footer } from "../../../components/Layout";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import CommonAboutSection from "../../../components/CommonAboutSection";
import {
  ProfessionalTaxAboutText,
  ProfessionalTaxCardText,
} from "../../../constants/Paragram";
import CommonCard from "../../../components/Card/CommonCard";
import TitleSection from "../../../components/TitleSection";
import QuickEnquiryForm from "../../../components/Forms/QuickEnquiryFrom";
import OtherPageLoader from "../../../components/Loader/OtherPageLoader";

const ProfessionalTax = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (ProfessionalTaxCardText) {
      setCardText1(ProfessionalTaxCardText[0]?.Statutory_Requirement);
      setCardText2(ProfessionalTaxCardText[1]?.Avoid_Penalty);
      setCardText3(ProfessionalTaxCardText[2]?.Tax_Deductible);
      setCardText4(ProfessionalTaxCardText[3]?.Easy_Compliance);
      setCardText5(ProfessionalTaxCardText[4]?.State_Government_Tax);
    }
  }, [ProfessionalTaxCardText]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds
  }, []);

  return (
    <>
      <ResHeader />
      <QuickEnquiryForm />
      <CommonAboutSection
        text={ProfessionalTaxAboutText}
        title="Professional"
        span="Tax"
      />
      <CommonCard
        cardtilte="Reasons to Obtain"
        cardspan="Professional Tax Registration"
        card1="Statutory Requirement"
        card1text={cardtext1}
        crad2="Avoid Penalty"
        cardtext2={cardtext2}
        card3="Tax Deductible"
        cardtext3={cardtext3}
        card4="Easy Compliance"
        cardtext4={cardtext4}
        card5="State Government Tax"
        cardtext5={cardtext5}
      />
      <Footer />
    </>
  );
};

export default ProfessionalTax;
