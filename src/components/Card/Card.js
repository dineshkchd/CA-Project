import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRegistered,
  faUsers,
  faMoneyCheckDollar,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faFileCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';

import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";


const Card = () => {
  return (
    <div className="grid-container">
      <div className="card-container">
        <div className="card">
          <Link to="/service/registration/proprietorship">
            <div className="card--display">
              <FontAwesomeIcon
                icon={faRegistered}
                size="xl"
                style={{ color: "#05044D" }}
              />
              <h2>Registration</h2>
            </div>
            <div className="card--hover">
              <h2>Registration</h2>
              <p>
                Incorporating a company or firm marks the initial stride towards
                initiating a business venture in India.
              </p>
              <p className="link">View More</p>
            </div>
          </Link>
          <div className="card--border"></div>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <Link to="service/compliance/change_company_name">
            <div className="card--display">
              <FontAwesomeIcon
                icon={faUsers}
                size="xl"
                style={{ color: "#05044D" }}
              />
              <h2>Compliance</h2>
            </div>
            <div className="card--hover">
              <h2>Compliance</h2>
              <p>
                We provide comprehensive services tailored to ensure businesses
                adhere to diverse reporting and regulatory standards while
                fostering their growth and development.
              </p>
              <p className="link">View More</p>
            </div>
          </Link>
          <div className="card--border"></div>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <Link to="/service/auditing">
            <div className="card--display">
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="xl"
                style={{ color: "#05044D" }}
              />
              <h2>Auditing</h2>
            </div>
            <div className="card--hover">
              <h2>Auditing</h2>
              <p>
                An audit is not just a formality, it's a vital necessity for
                safeguarding your business and fostering its growth. It serves
                as an early warning system, identifying potential risks and
                opportunities for improvement to ensure the success of your
                enterprise.
              </p>
              <p className="link">View More</p>
            </div>
          </Link>
          <div className="card--border"></div>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <Link to="/service/tax_filing/business_tax_filing">
            <div className="card--display">
              <FontAwesomeIcon
                icon={faFileCircleCheck}
                size="xl"
                style={{ color: "#05044D" }}
              />
              <h2>Tax Filing</h2>
            </div>
            <div className="card--hover">
              <h2>Tax Filing</h2>
              <p>
                As a chartered accountancy firm, we pledge to provide
                comprehensive guidance on tax planning, encompassing all aspects
                of domestic taxation.
              </p>
              <p className="link">View More</p>
            </div>
          </Link>
          <div className="card--border"></div>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <Link to="/service/funding/business_plan_preparation">
            <div className="card--display">
              <FontAwesomeIcon
                icon={faMoneyCheckDollar}
                size="xl"
                style={{ color: "#05044D" }}
              />
              <h2>Funding</h2>
            </div>
            <div className="card--hover">
              <h2>Funding</h2>
              <p>
                Outline business funding needs succinctly specify amount, purpose, and potential sources
              </p>
              <p className="link">View More</p>
            </div>
          </Link>
          <div className="card--border"></div>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <Link to="/service/documentcenter">
            <div className="card--display">
                <FontAwesomeIcon icon={faSackDollar} size="xl" style={{color: "#05044D"}}/>
              <h2>Investment</h2>
            </div>
            <div className="card--hover">
              <h2>Investment</h2>
              <p>
                Document management software for accountants is an important part of a paperless home office. 
                Just like paper, all digital/electronic documents need to be stored securely so they can be retrieved and used as needed
              </p>
              <p className="link">View More</p>
            </div>
          </Link>
          <div className="card--border"></div>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <Link to="/service/accounting">
            <div className="card--display">
              <FontAwesomeIcon
                icon={faCalculator}
                size="xl"
                style={{ color: "#05044D" }}
              />
              <h2>Accounting</h2>
            </div>
            <div className="card--hover">
              <h2>Accounting</h2>
              <p>
                We do more than Accounting. We take a comprehensive assessment
                of your finances and create a forecast through the year to keep
                your business in a healthy and prosperous state.
              </p>
              <p className="link">View More</p>
            </div>
          </Link>
          <div className="card--border"></div>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <Link to="/service/accounting">
            <div className="card--display">
              <FontAwesomeIcon
                icon={faCircleQuestion}
                size="xl"
                style={{ color: "#05044D" }}
              />
              <h2>Advisory</h2>
            </div>
            <div className="card--hover">
              <h2>Advisory</h2>
              <p>
                We do more than Accounting. We take a comprehensive assessment
                of your finances and create a forecast through the year to keep
                your business in a healthy and prosperous state.
              </p>
              <p className="link">View More</p>
            </div>
          </Link>
          <div className="card--border"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
