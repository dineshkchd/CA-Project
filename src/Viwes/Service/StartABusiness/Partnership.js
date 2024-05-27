import React, { useEffect, useState } from "react";
import { Footer } from "../../../components/Layout";
import CommonAboutSection from "../../../components/CommonAboutSection";
import {
  PartnershipAboutText,
  PartnershipCardText,
} from "../../../constants/Paragram";
import CommonCard from "../../../components/Card/CommonCard";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import TitleSection from "../../../components/TitleSection";
import OtherPageLoader from "../../../components/Loader/OtherPageLoader";

const Partnership = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (PartnershipCardText) {
      setCardText1(PartnershipCardText[0]?.Easy_to);
      setCardText2(PartnershipCardText[1]?.Business_Name);
      setCardText3(PartnershipCardText[2]?.Partnership_Deed);
      setCardText4(PartnershipCardText[3]?.Annual_Filing);
      setCardText5(PartnershipCardText[4]?.Bank_Account);
    }
  }, [PartnershipCardText]);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds
  }, []);

  return (
    <>
     <ResHeader />
          
          <QuickEnquiryFrom />
          {/* <CommonAboutSection
            text={PartnershipAboutText}
            title="Partner"
            span="ship"
          /> */}
          <CommonCard
            cardtilte="Reasons to Register a"
            cardspan="Partnership"
            card1="Easy to Start"
            card1text={cardtext1}
            crad2="Business Name"
            cardtext2={cardtext2}
            card3="Partnership Deed"
            cardtext3={cardtext3}
            card4="Annual Filing NOT Required"
            cardtext4={cardtext4}
            card5="Bank Account"
            cardtext5={cardtext5}
          />
          <Footer />
    </>
  );
};

export default Partnership;
