import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-taxcenter.jpg";
import "../fontAwesomeSetup"

const Footer = () => {
  return (
    <>
      <footer>
        <div class="foote-link">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div className="footer-logo">
                  <img src={Logo} alt="" width={130} />
                </div>
                <div className="footer icon">
                  <FontAwesomeIcon icon={faPhone} style={{marginLeft:"10px"}}/>
                  <FontAwesomeIcon icon={faEnvelope} style={{marginLeft:"10px"}}/>
                  <FontAwesomeIcon icon={['fab', 'facebook']}style={{marginLeft:"10px"}} />
                  <FontAwesomeIcon icon={['fab', 'instagram']} style={{marginLeft:"10px"}} />
                  <FontAwesomeIcon icon={['fab', 'linkedin']} style={{marginLeft:"10px"}}/>
                  <FontAwesomeIcon icon={['fab', 'youtube']} style={{marginLeft:"10px"}} />
                </div>             
              </div>
              <div class="col-md-4">
                <h2>Connect With Us</h2>
                <ul class="call-ad">
                  <li>
                    <Link to="#">
                      <FontAwesomeIcon icon={faMapMarkerAlt} /> &nbsp;
                      <span>
                        {" "}
                        SCO 78-79, First Floor, Phase 11, <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tarf Kumbra, Sahibzada
                        Ajit Singh Nagar,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Punjab 160062
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
                      info@taxcentre.co.in
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
              <div class="col-md-12">
                <p>
                  © Tex Center - All Rights Reserved.
                  {new Date().getFullYear()} Created by tax centre
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
