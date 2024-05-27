import React, { useEffect, useState } from 'react'
import { Footer, Topbar } from '../../../components/Layout'
import ResHeader from '../../../components/ResponsiveMemu/Header'
import CommonBanner from '../../../components/CommonBanner'
import banner from '../../../assets/images/Registration.jpg'
import QuickEnquiryForm from '../../../components/Forms/QuickEnquiryFrom'
import CommonAboutSection from '../../../components/CommonAboutSection'
import { TemporaryGSTRegistrationAboutText,TemporaryGSTRegistrationCardText } from '../../../constants/Paragram'
import CommonCard from "../../../components/Card/CommonCard";


const TemporaryGSTRegistration = () => {
    const [cardtext1, setCardText1] = useState("");
    const [cardtext2, setCardText2] = useState("");
    const [cardtext3, setCardText3] = useState("");
    const [cardtext4, setCardText4] = useState("");
    const [cardtext5, setCardText5] = useState("");
  
    useEffect(() => {
      if (TemporaryGSTRegistrationCardText) {
        setCardText1(TemporaryGSTRegistrationCardText[0]?.Unified_Platform);
        setCardText2(TemporaryGSTRegistrationCardText[1]?.Subsuming_of_Taxes);
        setCardText3(TemporaryGSTRegistrationCardText[2]?.Ease_of_Doing_Business);
        setCardText4(TemporaryGSTRegistrationCardText[3]?.Lower_Taxes);
        setCardText5(TemporaryGSTRegistrationCardText[4]?.Larger_Tax_Base);
      }
    }, [TemporaryGSTRegistrationCardText]);

  return (
    <>
        <Topbar/>
        <ResHeader/>
        <CommonBanner text="Temporary GST Registration" src={banner}/>
        <QuickEnquiryForm/>
        <CommonAboutSection text={TemporaryGSTRegistrationAboutText} title="Temporary" span="GST Registration"/>
        <CommonCard
            cardtilte="Important Aspects Relating"
            cardspan="to Trade License"
            card1="Unified Platform"
            card1text={cardtext1}
            crad2="Subsuming of Taxes"
            cardtext2={cardtext2}
            card3="Ease of Doing Business"
            cardtext3={cardtext3}
            card4="Lower Taxes"
            cardtext4={cardtext4}
            card5="Larger Tax Base"
            cardtext5={cardtext5}
        />
        <Footer/>
    </>
  )
}

export default TemporaryGSTRegistration