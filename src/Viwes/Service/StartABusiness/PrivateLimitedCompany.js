import React, { useEffect, useState } from "react";
import { Footer } from "../../../components/Layout";
import CommonAboutSection from "../../../components/CommonAboutSection";
import {
  PrivateLimitedCompanyAboutText,
  PrivateLimitedCompanyCardText,
} from "../../../constants/Paragram";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import CommonCard from "../../../components/Card/CommonCard";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import TitleSection from "../../../components/TitleSection";
import OtherPageLoader from "../../../components/Loader/OtherPageLoader";

const PrivateLimitedCompany = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (PrivateLimitedCompanyCardText) {
      setCardText1(PrivateLimitedCompanyCardText[0]?.Separate_Legal_Entity);
      setCardText2(PrivateLimitedCompanyCardText[1]?.Uninterrupted_Existence);
      setCardText3(PrivateLimitedCompanyCardText[2]?.Easy_Transferability);
      setCardText4(PrivateLimitedCompanyCardText[3]?.Borrowing_Capacity);
      setCardText5(PrivateLimitedCompanyCardText[4]?.Owning_Property);
    }
  }, [PrivateLimitedCompanyCardText]);

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
           text={}
           title="Private Limited"
           span="Company"
         /> */}
         <CommonCard
           cardtilte="Reasons to Register a Private"
           cardspan="Limited Company"
           card1="Separate Legal Entity"
           card1text={cardtext1}
           crad2="Uninterrupted Existence"
           cardtext2={cardtext2}
           card3="Easy Transferability"
           cardtext3={cardtext3}
           card4="Borrowing Capacity"
           cardtext4={cardtext4}
           card5="Owning Property"
           cardtext5={cardtext5}
         />
         <Footer />
    </>
  );
};

export default PrivateLimitedCompany;
