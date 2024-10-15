/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "../css/mortgagecalculator.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import img from "../images/illustration-empty.png";

export default function MortgageCalculator() {
  const [mortgage, setMortgage] = useState("");
  const [years, setYears] = useState("");
  const [percentage, setPercentage] = useState("");

  const handleClear = () => {
    setMortgage("");
    setYears("");
    setPercentage("");
  };

  return (
    <div className="mainboxcover">
      <div className="mainbox">
        {/* Left Section */}
        <div className="fbox">
          <div className="container heading1">
            <h2 className="hd1">Mortgage Calculator</h2>
            <p className="clright" onClick={handleClear}>
              Clear All
            </p>
          </div>
          <label className="container mb-1 txt1">Mortgage Amount</label>
          <div className="container input-group mb-3 custom-input-group">
            <span className="bg1 input-group-text ">
              <strong>£</strong>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Mortgage Amount"
              aria-label="Amount"
              aria-describedby="basic-addon1"
              value={mortgage}
              onChange={(e) => setMortgage(e.target.value)}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9.]/g, "");
              }}
            />
          </div>

          <div className="container term-rate custom-input-group">
            <div className="input-group custom-input-group ">
              <label className="p-0 container mb-1 txt1">Mortgage Term</label>
              <input
                type="text"
                className="form-control"
                placeholder="25"
                value={years}
                maxLength={2}
                onChange={(e) => setYears(e.target.value)}
                aria-label="Term"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9.]/g, "");
                }}
              />
              <span className="input-group-text bg1">years</span>
            </div>
            <div className="input-group">
              <label className="txt1 p-0 container mb-1">Interest Rate</label>
              <input
                type="text"
                className="form-control"
                placeholder="5.25"
                aria-label="Interest Rate"
                value={percentage}
                onChange={(e) => setPercentage(e.target.value)}
                maxLength={2}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9.]/g, "");
                }}
              />
              <span className="input-group-text bg1">%</span>
            </div>
          </div>

          <div className="container mortgage-type ">
            <section className="radio-section">
              <div className="radio-list">
                <label className="txt1 p-0 container mb-1">Mortgage Type</label>

                <div className="radio-item">
                  <input name="radio" id="radio1" type="radio" />
                  <label
                    htmlFor="radio1"
                    style={{ fontSize: 15, fontWeight: 630 }}
                  >
                    Repayment
                  </label>
                </div>
                <div className="radio-item">
                  <input name="radio" id="radio2" type="radio" />
                  <label
                    htmlFor="radio2"
                    style={{ fontSize: 15, fontWeight: 630 }}
                  >
                    Interest Only
                  </label>
                </div>
              </div>
            </section>
          </div>
          <div className="container btndiv">
            <button className="bg1 btn1 btn btn-primary btn-calculate">
              <FontAwesomeIcon icon={faCalculator} className="ic1" />
              Calculate Repayments
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="lbox">
          <div className="results-info">
            <img src={img} alt="Results Image" />
            <h3>Results shown here</h3>
            <p>
              Complete the form and click "calculate repayments" to see what
              your monthly repayments would be.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
