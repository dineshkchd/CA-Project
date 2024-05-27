import React, { useState, useEffect } from "react";
import ResHeader from "../../../components/ResponsiveMemu/Header";
import { Footer } from "../../../components/Layout";
import QuickEnquiryForm from "../../../components/Forms/QuickEnquiryFrom";


const GSTCalculator = () => {
  const [amountExcludingGST, setAmountExcludingGST] = useState("");
  const [gstRate, setGstRate] = useState("");
  const [amountIncludingGST, setAmountIncludingGST] = useState("");
  const [gstAmount, setGstAmount] = useState("");

  useEffect(() => {
    calculateGST();
  }, [amountExcludingGST, gstRate]);

  // Function to calculate GST
  const calculateGST = () => {
    if (!amountExcludingGST || !gstRate) return;

    const rate = parseFloat(gstRate);
    const amountExcludingGSTValue = parseFloat(amountExcludingGST);

    let calculatedGstAmount = 0;
    let calculatedAmountIncludingGST = 0;

    if (
      rate === 0.25 ||
      rate === 3 ||
      rate === 5 ||
      rate === 12 ||
      rate === 18 ||
      rate === 28
    ) {
      calculatedGstAmount = (amountExcludingGSTValue * rate) / 100;
      calculatedAmountIncludingGST =
        amountExcludingGSTValue + calculatedGstAmount;
    }

    setAmountIncludingGST(calculatedAmountIncludingGST.toFixed(2));
    setGstAmount(calculatedGstAmount.toFixed(2));
  };

  // Function to handle GST rate change
  const handleGSTRateChange = (e) => {
    const value = e.target.value;
    setGstRate(value);
  };

  // Function to handle amount excluding GST change
  const handleAmountExcludingGSTChange = (e) => {
    const value = e.target.value;
    setAmountExcludingGST(value);
  };

  return (
    <>
    <ResHeader/>
    <QuickEnquiryForm/>
    <div className="gst-calculator">
        <div className="input-group">
          <label htmlFor="amount-excluding-gst">Amount excluding GST:</label>
          <input
            type="number"
            id="amount-excluding-gst"
            value={amountExcludingGST}
            onChange={handleAmountExcludingGSTChange}
            placeholder="Enter amount excluding GST"
          />
        </div>
        <div className="input-group radio-group">
          <label>GST Rate:</label>
          <div>
            <input
              type="radio"
              id="gst-0.25"
              name="gst-rate"
              value="0.25"
              checked={gstRate === "0.25"}
              onChange={handleGSTRateChange}
            />
            <label htmlFor="gst-0.25">0.25%</label>
          </div>
          <div>
            <input
              type="radio"
              id="gst-3"
              name="gst-rate"
              value="3"
              checked={gstRate === "3"}
              onChange={handleGSTRateChange}
            />
            <label htmlFor="gst-3">3%</label>
          </div>
          <div>
            <input
              type="radio"
              id="gst-5"
              name="gst-rate"
              value="5"
              checked={gstRate === "5"}
              onChange={handleGSTRateChange}
            />
            <label htmlFor="gst-5">5%</label>
          </div>
          <div>
            <input
              type="radio"
              id="gst-12"
              name="gst-rate"
              value="12"
              checked={gstRate === "12"}
              onChange={handleGSTRateChange}
            />
            <label htmlFor="gst-12">12%</label>
          </div>
          <div>
            <input
              type="radio"
              id="gst-18"
              name="gst-rate"
              value="18"
              checked={gstRate === "18"}
              onChange={handleGSTRateChange}
            />
            <label htmlFor="gst-18">18%</label>
          </div>
          <div>
            <input
              type="radio"
              id="gst-28"
              name="gst-rate"
              value="28"
              checked={gstRate === "28"}
              onChange={handleGSTRateChange}
            />
            <label htmlFor="gst-28">28%</label>
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="amount-including-gst">Amount including GST:</label>
          <input
            type="number"
            id="amount-including-gst"
            value={amountIncludingGST}
            readOnly
          />
        </div>
        <div className="input-group">
          <label htmlFor="gst-amount">GST:</label>
          <input type="number" id="gst-amount" value={gstAmount} readOnly />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default GSTCalculator;
