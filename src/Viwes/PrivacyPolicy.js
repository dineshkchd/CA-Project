import React from "react";
import { Footer } from "../components/Layout";
import ResHeader from "../components/ResponsiveMemu/Header";
import CommonAboutSection from "../components/CommonAboutSection";
import { PrivacyPolicyAboutText } from "../constants/Paragram";
import { Col, Container, Row } from "react-bootstrap";

const PrivacyPolicy = () => {
  return (
    <>
      <ResHeader />
      <CommonAboutSection
        text={PrivacyPolicyAboutText}
        title="Privacy Policy"
        span={`for <a href="https://capka.co.in/" target="_blank" style="text-decoration: none;">(www.capka.co.in)</a>`}
      />
      <section className="hm-about-sec">
        <Container>
          <Row>
            <Col>
              <p>
                <h4 className="start">Consent</h4>
                By using our website, you hereby consent to our Privacy Policy
                and agree to its terms.
              </p>

              <p>
                <h4 className="start">Information we collect</h4>
                The personal information that you are asked to provide, and the
                reasons why you are asked to provide it, will be made clear to
                you at the point we ask you to provide your personal
                information. If you contact us directly, we may receive
                additional information about you such as your name, email
                address, phone number, the contents of the message and/or
                attachments you may send us, and any other information you may
                choose to provide. When you register for an Account, we may ask
                for your contact information, including items such as name,
                company name, address, email address, and telephone number.
              </p>

              <p>
                <h4 className="start">How we use your information</h4>
                We use the collected information in various ways, including to:
                <ul>
                  <li>Provide, operate, and maintain our website</li>
                  <li>Improve, personalize, and expand our website</li>
                  <li>Understand and analyse how you use our website</li>
                  <li>
                    Develop new products, services, features, and functionality
                  </li>
                  <li>
                    {" "}
                    Communicate with you, either directly or through one of our
                    partners, including for customer service, to provide you
                    with updates and other information relating to the website,
                    and for marketing and promotional purposes.
                  </li>
                  <li>Send you emails</li>
                  <li>Find and prevent fraud</li>
                </ul>
              </p>

              <p>
                <h4 className="start">Log Files</h4>
                www.capka.co.in follows a standard procedure of using log files.
                These files log visitors when they visit websites. All hosting
                companies do this and a part of hosting services' analytics. The
                information collected by log files include internet protocol
                (IP) addresses, browser type, Internet Service Provider (ISP),
                date and time stamp, referring/exit pages, and possibly the
                number of clicks. These are not linked to any information that
                is personally identifiable. The purpose of the information is
                for analysing trends, administering the site, tracking users'
                movement on the website, and gathering demographic information.
              </p>

              <p>
                <h4 className="start">Cookies and Web Beacons</h4>
                Like any other website,{" "}
                <a
                  href="https://capka.co.in/"
                  target="blank"
                  style={{ textDecoration: "none" }}
                >
                  www.capka.co.in.
                </a>{" "}
                uses ‘cookies’. These cookies are used to store information
                including visitors' preferences, and the pages on the website
                that the visitor accessed or visited. The information is used to
                optimize the users' experience by customizing our web page
                content based on visitors' browser type and/or other
                information.
              </p>

              <p>
                <h4 className="start">DoubleClick DART Cookie</h4>
                Google is one of a third-party vendor on our site. It also uses
                cookies, known as DART cookies, to serve ads to our site
                visitors based upon their visit to{" "}
                <a
                  href="https://capka.co.in/"
                  target="blank"
                  style={{ textDecoration: "none" }}
                >
                  www.capka.co.in.
                </a>{" "}
                and other sites on the internet. However, visitors may choose to
                decline the use of DART cookies by visiting the Google ad and
                content network Privacy Policy at the following URL
                <a
                  href="https://policies.google.com/technologies/ads"
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  – https://policies.google.com/technologies/ads
                </a>
                Some of advertisers on our site may use cookies and web beacons.
                Our advertising partners are listed below. Each of our
                advertising partners has their own Privacy Policy for their
                policies on user data. For easier access, we hyperlinked to
                their Privacy Policies below.
                <ul>
                  <li>
                    {" "}
                    Google{" "}
                    <a
                      href="https://policies.google.com/technologies/ads"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      https://policies.google.com/technologies/ads
                    </a>{" "}
                  </li>
                </ul>
              </p>

              <p>
                <h4 className="start">Advertising Partners Privacy Policies</h4>
                You may consult this list to find the Privacy Policy for each of
                the advertising partners of{" "}
                <a
                  href="https://capka.co.in/"
                  target="blank"
                  style={{ textDecoration: "none" }}
                >
                  www.capka.co.in.
                </a>{" "}
                Third-party ad servers or ad networks uses technologies like
                cookies, JavaScript, or Web Beacons that are used in their
                respective advertisements and links that appear on{" "}
                <a
                  href="https://capka.co.in/"
                  target="blank"
                  style={{ textDecoration: "none" }}
                >
                  www.capka.co.in.
                </a>
                , which are sent directly to users' browser. They automatically
                receive your IP address when this occurs. These technologies are
                used to measure the effectiveness of their advertising campaigns
                and/or to personalize the advertising content that you see on
                websites that you visit. Note that{" "}
                <a
                  href="https://capka.co.in/"
                  target="blank"
                  style={{ textDecoration: "none" }}
                >
                  www.capka.co.in.
                </a>{" "}
                in has no access to or control over these cookies that are used
                by third-party advertisers.
              </p>

              <p>
                <h4 className="start">Third-Party Privacy Policies</h4>
                <a
                  href="https://capka.co.in/"
                  target="blank"
                  style={{ textDecoration: "none" }}
                >
                  www.capka.co.in
                </a>
                's Privacy Policy does not apply to other advertisers or
                websites. Thus, we are advising you to consult the respective
                Privacy Policies of these third-party ad servers for more
                detailed information. It may include their practices and
                instructions about how to opt-out of certain options. You may
                find a complete list of these Privacy Policies and their links
                here: Privacy Policy Links. You can choose to disable cookies
                through your individual browser options. To know more detailed
                information about cookie management with specific web browsers,
                it can be found at the browsers' respective websites.
              </p>

              <p>
                <h4 className="start">
                  CCPA Privacy Policy (Do Not Sell My Personal Information)
                </h4>
                Under the CCPA, among other rights, Indian consumers have the
                right to: Request that a business that collects a consumer's
                personal data disclose the categories and specific pieces of
                personal data that a business has collected about consumers.
                Request that a business delete any personal data about the
                consumer that a business has collected. Request that a business
                that sells a consumer's personal data, not sell the consumer's
                personal data. If you make a request, we have one month to
                respond to you. If you would like to exercise any of these
                rights, please contact us.
              </p>

              <p>
                <h4 className="start">
                  GDPR Privacy Policy (Data Protection Rights)
                </h4>
                We would like to make sure you are fully aware of all of your
                data protection rights. Every user is entitled to the following:{" "}
                <br />
                The right to access – You have the right to request copies of
                your personal data. We may charge you a small fee for this
                service. <br />
                <br />
                The right to rectification – You have the right to request that
                we correct any information you believe is inaccurate. You also
                have the right to request that we complete the information you
                believe is incomplete.
                <br />
                <br />
                The right to erasure – You have the right to request that we
                erase your personal data, under certain conditions.
                <br />
                <br />
                The right to restrict processing – You have the right to request
                that we restrict the processing of your personal data, under
                certain conditions. <br />
                <br />
                The right to object to processing – You have the right to object
                to our processing of your personal data, under certain
                conditions. <br />
                <br />
                The right to data portability – You have the right to request
                that we transfer the data that we have collected to another
                organization, or directly to you, under certain conditions. If
                you make a request, we have one month to respond to you. If you
                would like to exercise any of these rights, please contact us.
              </p>

              <p>
                <h4 className="start">Children's Information</h4>
                Another part of our priority is adding protection for children
                while using the internet. We encourage parents and guardians to
                observe, participate in, and/or monitor and guide their online
                activity.
                <a
                  href="https://capka.co.in/"
                  target="blank"
                  style={{ textDecoration: "none" }}
                >
                  www.capka.co.in
                </a>{" "}
                does not knowingly collect any Personal Identifiable Information
                from children under the age of 13. If you think that your child
                provided this kind of information on our website, we strongly
                encourage you to contact us immediately and we will do our best
                efforts to promptly remove such information from our records.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
