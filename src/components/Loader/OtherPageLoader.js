import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsPraying } from "@fortawesome/free-regular-svg-icons";

const OtherPageLoader = () => {
  return (
    <>
      <div className="circle" style={{ textAlign: "center", fontSize: "10rem",marginTop:'15%' }}>
      <span role="img" aria-label="praying hands">
            🙏
      </span><br />
    </div>
    <p className="loader-text">Keep Smile and Stay</p>
    </>
  );
};

export default OtherPageLoader;
