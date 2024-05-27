import React from "react";

const Loading = () => {
  return (
    <>
      <div style={{ height: "100vh", background: "#fff" }}>
        <div class="patterns">
          <svg width="100%" height="100%">
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#polka-dots)"
            >
              {" "}
            </rect>
            <text x="50%" y="40%" text-anchor="middle">
              {" "}
              Welcome To{" "}
            </text>

            <text x="50%" y="55%" text-anchor="middle">
              Purminder Kaur & Associates
            </text>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Loading;
