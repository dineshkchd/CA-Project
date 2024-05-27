import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  About,
  AddDirectors,
  AddPartner,
  Assessment,
  BankLoanRating,
  BankLoanSyndication,
  BusinessPlanPreparation,
  BusinessTaxFiling,
  CMAReportPreparation,
  CancelGSTRegistration,
  ChangeCompanyName,
  CollateralFreeLoan,
  Contact,
  CopyrightRegistration,
  CreditScoreCheck,
  ESIReturn,
  GSTRegistration,
  GSTReturn,
  GSTAmendment,
  Home,
  ImportExportCode,
  IncreaseAuthorizedCapital,
  LimitedLiabilityPartnership,
  MOAAmendment,
  MSMERegistration,
  NoticeScrutiny,
  OnePersonCompany,
  PFRegistration,
  Partnership,
  Payment,
  PrivacyPolicy,
  PrivateLimitedCompany,
  ProfessionalTax,
  Proprietorship,
  PublicLimitedCompany,
  RegisteredOfficeChange,
  RemoveDirectors,
  ShareTransfer,
  SocietyRegistrations,
  TDSReturn,
  TanRegistration,
  TemporaryGSTRegistration,
  TermLoan,
  TradeLicense,
  TrademarkObjection,
  TrademarkRegistration,
  TrademarkRenewal,
  Trust,
  UdyamAadhar,
  WindingUpofCompany,
  WindingUpofLLP,
  WorkingCapital,
  Auditing,
  CapitalGain,
  FinancialPlanning,
  BusinessSociety,
  BusinessGrowth,
  Investment,
  SalePurchaseProperty,
  BookKeeper,
  LifeInsurance,
  MutualfundInvestment,
  CapitalAssessment,
  HealthInsurance,
  ITRFiling,
  PANAadharLink,
  TaxPayment,
  TaxCapitalGain,
  TaxNoticeSCOTIN,
  Accounting,
  Documentcenter,
  TaxCalculator,
  GSTCalculator,
  NoticeSCOTIN,
  Schedule,
} from "../Viwes";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/home" exact element={<Home />} />
      <Route path="/about" exact element={<About />} />
      <Route path="/contactus" exact element={<Contact />} />
      <Route path="/payment" exact element={<Payment />} />
      <Route
        path="/service/registration/proprietorship"
        exact
        element={<Proprietorship />}
      />
      <Route
        path="/service/registration/partnership"
        exact
        element={<Partnership />}
      />
      <Route
        path="/service/registration/one_person_company"
        exact
        element={<OnePersonCompany />}
      />
      <Route
        path="/service/registration/limited_liability_partnership"
        exact
        element={<LimitedLiabilityPartnership />}
      />
      <Route
        path="/service/registration/private_limited_company"
        exact
        element={<PrivateLimitedCompany />}
      />
      <Route
        path="/service/registration/public_limited_company"
        exact
        element={<PublicLimitedCompany />}
      />
      <Route
        path="/service/tax_filing/business_tax_filing"
        exact
        element={<BusinessTaxFiling />}
      />
      <Route
        path="/service/tax_filing/TDS_return"
        exact
        element={<TDSReturn />}
      />
      <Route
        path="/service/tax_filing/ESI_return"
        exact
        element={<ESIReturn />}
      />
      <Route
        path="/service/tax_filing/cancel_GST_registration"
        exact
        element={<CancelGSTRegistration />}
      />
      <Route
        path="/service/funding/bank_loan_syndication"
        exact
        element={<BankLoanSyndication />}
      />
      <Route
        path="/service/funding/collateral_free_loan"
        exact
        element={<CollateralFreeLoan />}
      />
      <Route
        path="/service/funding/working_capital"
        exact
        element={<WorkingCapital />}
      />
      <Route path="/service/funding/term_loan" exact element={<TermLoan />} />
      <Route
        path="/service/funding/credit_score_check"
        exact
        element={<CreditScoreCheck />}
      />
      <Route
        path="/service/funding/bank_loan_rating"
        exact
        element={<BankLoanRating />}
      />
      <Route
        path="/service/funding/CMA_report_preparation"
        exact
        element={<CMAReportPreparation />}
      />
      <Route
        path="/service/funding/business_plan_preparation"
        exact
        element={<BusinessPlanPreparation />}
      />
      <Route
        path="/service/compliance/change_company_name"
        exact
        element={<ChangeCompanyName />}
      />
      <Route
        path="/service/compliance/winding_up_of_LLP"
        exact
        element={<WindingUpofLLP />}
      />
      <Route
        path="/service/compliance/winding_up_of_company"
        exact
        element={<WindingUpofCompany />}
      />
      <Route
        path="/service/compliance/add_partner"
        exact
        element={<AddPartner />}
      />
      <Route
        path="/service/compliance/MOA_amendment"
        exact
        element={<MOAAmendment />}
      />
      <Route
        path="/service/compliance/share_transfer"
        exact
        element={<ShareTransfer />}
      />
      <Route
        path="/service/compliance/increase_authorized_capital"
        exact
        element={<IncreaseAuthorizedCapital />}
      />
      <Route
        path="/service/compliance/remove_directors"
        exact
        element={<RemoveDirectors />}
      />
      <Route
        path="/service/compliance/add_directors"
        exact
        element={<AddDirectors />}
      />
      <Route
        path="/service/compliance/registered_office_change"
        exact
        element={<RegisteredOfficeChange />}
      />
      <Route
        path="/service/registrations/trade_license"
        exact
        element={<TradeLicense />}
      />
      <Route
        path="/service/registrations/temporary_GST_registration"
        exact
        element={<TemporaryGSTRegistration />}
      />
      <Route
        path="/service/IncomeTax/Tan_PAN_registration"
        exact
        element={<TanRegistration />}
      />
      <Route
        path="/service/IncomeTax/professional_tax"
        exact
        element={<ProfessionalTax />}
      />
      <Route
        path="/service/registrations/PF_registration"
        exact
        element={<PFRegistration />}
      />
      <Route
        path="/service/registrations/MSME_registration"
        exact
        element={<MSMERegistration />}
      />
      <Route
        path="/service/registration/import_export_code"
        exact
        element={<ImportExportCode />}
      />
      <Route path="/service/registration/trust" exact element={<Trust />} />
      <Route
        path="/service/registration/society_registrations"
        exact
        element={<SocietyRegistrations />}
      />
      <Route
        path="/service/registration/udyam_aadhar"
        exact
        element={<UdyamAadhar />}
      />

      <Route
        path="/trademarkcopyright/trademark_registration"
        exact
        element={<TrademarkRegistration />}
      />
      <Route
        path="/trademarkcopyright/trademark_objection"
        exact
        element={<TrademarkObjection />}
      />
      <Route
        path="/trademarkcopyright/trademark_renewal"
        exact
        element={<TrademarkRenewal />}
      />
      <Route
        path="/trademarkcopyright/copyright_registration"
        exact
        element={<CopyrightRegistration />}
      />
      <Route
        path="/service/GST/GST_registration"
        exact
        element={<GSTRegistration />}
      />
      <Route path="/service/GST/GST_Return" exact element={<GSTReturn />} />
      <Route
        path="/service/GST/Notice_Scrutiny"
        exact
        element={<NoticeSCOTIN />}
      />
      <Route
        path="/service/GSt/GST_Amendment"
        exact
        element={<GSTAmendment />}
      />
      <Route path="/service/GST/Assessment" exact element={<Assessment />} />
      <Route path="/service/auditing" exact element={<Auditing />} />
      <Route
        path="/service/advisory/capital_gain"
        exact
        element={<CapitalGain />}
      />
      <Route
        path="/service/advisory/financial_planning"
        exact
        element={<FinancialPlanning />}
      />
      <Route
        path="/service/advisory/business_society"
        exact
        element={<BusinessSociety />}
      />
      <Route
        path="/service/advisory/business_growth"
        exact
        element={<BusinessGrowth />}
      />
      <Route
        path="/service/advisory/investment"
        exact
        element={<Investment />}
      />
      <Route
        path="/service/advisory/sale_purchase_property"
        exact
        element={<SalePurchaseProperty />}
      />
      <Route
        path="/service/investment/mutual_fund_investment"
        exact
        element={<MutualfundInvestment />}
      />
      <Route
        path="/service/investment/life_insurance"
        exact
        element={<LifeInsurance />}
      />
      <Route
        path="/service/investment/health_insurance"
        exact
        element={<HealthInsurance />}
      />
      <Route
        path="/service/investment/capital_assessment"
        exact
        element={<CapitalAssessment />}
      />
      <Route
        path="/service/IncomeTax/ITR_filing"
        exact
        element={<ITRFiling />}
      />
      <Route
        path="/service/IncomeTax/ITR_filing"
        exact
        element={<ITRFiling />}
      />
      <Route
        path="/service/IncomeTax/PAN_Aadhar_Link"
        exact
        element={<PANAadharLink />}
      />
      <Route
        path="/service/IncomeTax/tax_payment"
        exact
        element={<TaxPayment />}
      />
      <Route
        path="/service/IncomeTax/capital_gain"
        exact
        element={<TaxCapitalGain />}
      />
      <Route
        path="/service/IncomeTax/notice_Scrutiny"
        exact
        element={<TaxNoticeSCOTIN />}
      />
      <Route
        path="/service/IncomeTax/TaxCalculation"
        exact
        element={<TaxCalculator />}
      />
      <Route
        path="/service/GST/GST_Tax_Calculation"
        exact
        element={<GSTCalculator />}
      />
      <Route path="/service/accounting" exact element={<Accounting />} />
      <Route
        path="/service/documentcenter"
        exact
        element={<Documentcenter />}
      />
      <Route path="/service/book_keeping" exact element={<BookKeeper />} />
      <Route path="/privacy_policy" exact element={<PrivacyPolicy />} />
      <Route path="/schedule-call" exact element={<Schedule />} />
    </Routes>
  );
};

export default AppRouter;
