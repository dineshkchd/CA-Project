import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faHourglassStart } from "@fortawesome/free-solid-svg-icons";

const SupportCard = () => {
  return (
    <>
      <div className="grid-support-container">
        <div className="content">
          <div className="supportcard">
            <div className="icon">
              <FontAwesomeIcon
                icon={faFolderOpen}
                style={{ color: "#05044D" }}
              />
            </div>
            <p className="title">Client Confidentiality</p>
            <p className="text">
              We strictly adhere to a privacy policy that prohibits the
              disclosure of confidential client information to any third party.
            </p>
          </div>

          <div className="supportcard">
            <div className="icon">
              <FontAwesomeIcon icon={faHeadset} style={{ color: "#05044D" }} />
            </div>
            <p className="title">Customer Support</p>
            <p className="text">
              We prioritize cultivating strong client relationships and aim to
              consistently leave a positive impression. Our Client Support
              System operates on a strict timeline, ensuring timely assistance
              and resolution for our clients' needs.
            </p>
          </div>

          <div className="supportcard">
            <div className="icon">
              <FontAwesomeIcon
                icon={faHourglassStart}
                style={{ color: "#05044D" }}
              />
            </div>
            <p className="title">Time & Cost Effectiveness</p>
            <p className="text">
              We deliver top-notch professional services that meet industry
              standards, ensuring timely and cost-effective solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportCard;
