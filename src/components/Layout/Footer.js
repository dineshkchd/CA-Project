import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="foote-link">
          <div class="container">
            <div class="row">
              <div class="col-md-5">
                <div class="row">
                  <div class="col-md-5">
                    <h2>Quick links</h2>
                    <ul class="foot-link-list">
                      <li>
                        <Link to="/service/registration/proprietorship">
                          Registration
                        </Link>
                      </li>
                      <li>
                        <Link to="/service/auditing">Auditing</Link>
                      </li>
                      <li>
                        <Link to="/service/IncomeTax/ITR_filing">
                          Income Tax
                        </Link>
                      </li>
                      <li>
                        <Link to="/service/book_keeping">Book Keeping</Link>
                      </li>
                      <li>
                        <Link to="/service/GST/GST_registration">GST</Link>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <h2>About Us</h2>
                    <ul class="foot-link-list">
                      <li>
                        <Link class="" to="/about">
                          Vision
                        </Link>
                      </li>
                      <li>
                        <Link class="" to="/about">
                          Mission
                        </Link>
                      </li>
                      <li>
                        <Link class="" to="/about">
                          Value
                        </Link>
                      </li>
                      <li>
                        <Link class="" to="/privacy_policy">
                          Privacy Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <h2>Subscribe Now</h2>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter email address"
                  id=""
                  name=""
                  value=""
                />
                <input type="submit" class="btn btn-join" value="Subscribe" />
              </div>
              <div class="col-md-4">
                <h2>Connect With Us</h2>
                <ul class="call-ad">
                  <li>
                    <Link to="#">
                      <FontAwesomeIcon icon={faMapMarkerAlt} /> &nbsp;
                      <span>
                        {" "}
                        SCO 79, First Floor, Phase 11, Tarf Kumbra, Sahibzada
                        Ajit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Singh Nagar,
                        Punjab 160062
                      </span>
                    </Link>
                  </li>
                  <li>
                    <a href="tel:+91 964-687-4599">
                      <FontAwesomeIcon icon={faPhone} />
                      &nbsp;&nbsp; +91 964-687-4599
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@capka.co.in">
                      <FontAwesomeIcon icon={faEnvelope} /> &nbsp;&nbsp;
                      info@capka.co.in
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="copy-right">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-7">
                <p>
                  © Purminder Kaur & Associates - All Rights Reserved.
                  {new Date().getFullYear()} Created by Purminder Kaur.
                </p>
              </div>
              <div class="col-md-4 text-end"></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
